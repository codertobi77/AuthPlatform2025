<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableGlobal extends Model
{
    use HasFactory;

    // Table associée
    protected $table = 'table_globals';

    // Colonnes à remplir
    protected $fillable = [
        'data_type', 'data_cat', 'cat_name', 'cat_desc', 'created_at', 'updated_at'
    ];

    // Colonnes non modifiables
    protected $guarded = ['id'];

    // Définir les types de données pour certaines colonnes
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

