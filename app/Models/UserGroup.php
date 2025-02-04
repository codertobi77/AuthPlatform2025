<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];
    public function users()
    {
        return $this->hasMany(User::class, 'group_id');
    }
}

