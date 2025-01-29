<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    // Table associée
    protected $table = 'users';

    // Colonnes à remplir
    protected $fillable = [
        'role_id', 'email', 'password', 'remember_token', 'created_at', 'updated_at'
    ];

    // Colonnes non modifiables
    protected $guarded = ['id'];

    // Hashing du mot de passe lors de l'insertion
    protected $hidden = [
        'password', 'remember_token',
    ];

    // Format des dates
    protected $dates = [
        'created_at', 'updated_at',
    ];

    // Définir les types de données pour certaines colonnes
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
