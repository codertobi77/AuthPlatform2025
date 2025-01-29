<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = auth()->user(); // Récupérer l'utilisateur authentifié
        $profile = $user->profile; // Suppose que la relation est définie sur le modèle User
        $userGroup = DB::table('table_globals')->where('id', $user->role_id)->value('data_cat');
        $filiere = DB::table('table_globals')->where('id', $profile->filiere_id)->value('data_cat');
        $service = DB::table('table_globals')->where('id', $profile->service_id)->value('data_cat');

        // dd($user, $profile, $userGroup, $filiere, $service);

        if ($service == null) {
            $miscellaneous = $filiere;
        } else {
            $miscellaneous = $service;
        }

        return Inertia::render('Profile/Edit', [
            'user' => [
                        'id' => $user->id,
                        'email' => $user->email,
                        'profile_firstname' => $profile->firstname,
                        'profile_lastname' => $profile->lastname,
                        'profile_tel' => $profile->tel,
                        'group' => $userGroup,
                        'miscellaneous' => $miscellaneous
                        ],
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
