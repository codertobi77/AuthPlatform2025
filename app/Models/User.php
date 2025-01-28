<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'group_id', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function group()
    {
        return $this->belongsTo(UserGroup::class, 'group_id');
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
