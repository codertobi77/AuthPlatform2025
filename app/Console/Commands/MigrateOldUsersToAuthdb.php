<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class MigrateOldUsersToAuthdb extends Command
{
    protected $signature = 'migrate:old-users';
    protected $description = 'Migrer les données des anciennes tables vers authdb (users et profile)';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $oldUsers = DB::table('external_users')->get(); // Remplacez 'external_users' par le nom réel de l'ancienne table

        foreach ($oldUsers as $oldUser) {
            // Insérer les données dans la table `users`
            $userId = DB::table('users')->insertGetId([
                'email' => $oldUser->email,
                'password' => $oldUser->password,
                'role_id' => $oldUser->role_id,
                'remember_token' => $oldUser->remember_token,
                'created_at' => $oldUser->created_at,
                'updated_at' => $oldUser->updated_at,
            ]);

            // Insérer les données dans la table `profile`
            DB::table('profiles')->insert([
                'user_id' => $userId,
                'firstname' => $oldUser->firstname,
                'lastname' => $oldUser->lastname,
                'service_id' => $oldUser->service_id,
                'filiere_id' => $oldUser->filiere_id,
                'active_status' => $oldUser->active_status,
                'avatar' => $oldUser->avatar,
                'dark_mode' => $oldUser->dark_mode,
                'messenger_color' => $oldUser->messenger_color,
                'created_at' => $oldUser->created_at,
                'updated_at' => $oldUser->updated_at,
            ]);
        }

        $this->info('Les données ont été migrées avec succès.');
    }
}
