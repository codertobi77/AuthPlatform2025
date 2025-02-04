<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    // Table associée
    protected $table = 'profiles';

    // Colonnes à remplir
    protected $fillable = [
        'user_id', 'firstname', 'lastname', 'service_id', 'filiere_id', 
        'active_status', 'avatar', 'dark_mode', 'messenger_color', 
        'created_at', 'updated_at'
    ];

    // Colonnes non modifiables
    protected $guarded = ['id'];

    // Définir les types de données pour certaines colonnes
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Lier un profil à un utilisateur
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
