<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Profile;
use App\Models\UserGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {
        $redirectUrl = $request->query('redirect_url', '/dashboard');
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'redirectUrl' => $redirectUrl,
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        // Authentifier l'utilisateur
        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // Récupérer l'utilisateur connecté
            $user = Auth::user();
            $profile = Profile::where("user_id", $user->id)->first();
            $userGroup = UserGroup::where("id", $user->group_id)->first();

            // Générer un token Sanctum
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

        // Si l'authentification échoue
        return back()->withErrors([
            'email' => 'Les identifiants fournis sont incorrects.',
        ]);
    }

    /**
     * Log the user out of the application.
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
