<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\TableGlobal;
use App\Models\Profile;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    public function create(Request $request)
    {
        $redirectUrl = $request->query('redirect_url', '/dashboard');
        $groups = TableGlobal::where('data_type', 'user')->get()->toArray();
        $filieres = TableGlobal::where('data_type', 'filiere')->get()->toArray();
        $services = TableGlobal::where('data_type', 'service')->get()->toArray();

        // dd($groups, $services, $filieres);

        return Inertia::render('Auth/Register', compact('groups', 'services', 'filieres', 'redirectUrl'));
    }

    public function store(Request $request)
    {
        Log::info("Requête reçue", $request->all());
        // Validation des champs
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'tel' => 'required|string|max:20',
            'group_id' => 'required|exists:table_globals,id',  // Assurer que l'ID du groupe existe
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'filiere_id' => 'nullable|exists:table_globals,id',  // Validation pour la filière
            'service_id' => 'nullable|exists:table_globals,id',  // Validation pour le service
        ]);

        Log::info("Validation effectuée", $request->all());

         // Création de l'utilisateur
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->group_id,
        ]);

         // Création du profil
        $profile = Profile::create([
            'user_id' => $user->id,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'tel' => $request->tel,
            'filiere_id' => $request->filiere_id,  // Ajout de la filière
            'service_id' => $request->service_id,  // Ajout du service
            "active_status" => $request->active_status,
            "avatar" => $request->avatar,
            "dark_mode"=> $request->dark_mode,
            "messenger_color" => $request->messenger_color
        ]);

        event(new Registered($user));


        // Récupérer le groupe de l'utilisateur
        $userGroup = TableGlobal::where('id', $user->role_id)->first();

        if ($userGroup->data_cat == "Etudiant") {
            $miscellaneous = TableGlobal::where('id', $user->filiere_id)->first();
        } else {
            $miscellaneous = TableGlobal::where('id', $user->service_id)->first();
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        // Récupérer l'URL de redirection
        $redirectUrl = $request->input('redirectUrl', '/dashboard');

         // Construire l'URL avec les paramètres supplémentaires
        $queryParams = http_build_query([
            'token' => $token,
            'user' => json_encode([
                'id' => $user->id,
                'email' => $user->email,
                'profile_firstname' => $profile->firstname,
                'profile_lastname' => $profile->lastname,
                'profile_tel' => $profile->tel,
                'group' => $userGroup->data_cat,
                'miscellaneous' => $miscellaneous
            ]),
        ]);

        // Ajouter les paramètres à l'URL de redirection
        $fullRedirectUrl = $redirectUrl . '?' . $queryParams;

         if($redirectUrl != null && $redirectUrl != 'undefined' && $redirectUrl != '/undefined' && $redirectUrl != 'dashboard' && $redirectUrl != '/dashboard'){
            return redirect()->intended($fullRedirectUrl);
         }else{
            return Inertia::render('Dashboard', [
                'user' => [
                    'id' => $user->id,
                   'email' => $user->email,
                   'profile_firstname' => $profile->firstname,
                   'profile_lastname' => $profile->lastname,
                   'profile_tel' => $profile->tel,
                   'group' => $userGroup->data_cat,
                   'miscellaneous' => $miscellaneous
                ],
                'access_token' => $token,
                'token_type' => 'Bearer',
                'redirectUrl' => $fullRedirectUrl, // Passer l'URL de redirection au frontend
           ]);
         }
    }
}
