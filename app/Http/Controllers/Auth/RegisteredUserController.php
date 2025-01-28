<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserGroup;
use App\Models\Profile;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    public function create(Request $request)
    {
        $redirectUrl = $request->query('redirect_url', '/dashboard');
        $groups = UserGroup::all();

        return Inertia::render('Auth/Register', compact('groups', 'redirectUrl'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'tel' => 'required|string|max:20',
            'group_id' => 'required|exists:user_groups,id',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'group_id' => $request->group_id,
        ]);

        $profile = Profile::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'tel' => $request->tel,
        ]);

        event(new Registered($user));

        $userGroup = UserGroup::where("id", $user->group_id)->first();

        $token = $user->createToken('auth_token')->plainTextToken;

        // Récupérer l'URL de redirection
        $redirectUrl = $request->input('redirectUrl', 'dashboard');

         // Construire l'URL avec les paramètres supplémentaires
        $queryParams = http_build_query([
            'token' => $token,
            'user' => json_encode([
                'id' => $user->id,
                'email' => $user->email,
                'profile_name' => $profile->name,
                'profile_tel' => $profile->tel,
                'group' => $userGroup->name,
            ]),
        ]);

        // Ajouter les paramètres à l'URL de redirection
        $fullRedirectUrl = $redirectUrl . '?' . $queryParams;

         return Inertia::render('Dashboard', [
             'user' => [
                 'id' => $user->id,
                 'email' => $user->email,
                 'profile_name' => $profile->name,
                 'profile_tel' => $profile->tel,
                 'group' => $userGroup->name,
             ],
             'access_token' => $token,
             'token_type' => 'Bearer',
             'redirectUrl' => $fullRedirectUrl, // Passer l'URL de redirection au frontend
        ]);
    }
}
