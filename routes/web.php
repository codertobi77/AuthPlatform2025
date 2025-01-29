<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});



Route::get('/dashboard', function () {
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

    return Inertia::render('Dashboard', [
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
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
