<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProfileTableForUserData extends Migration
{
    public function up()
    {
        Schema::table('profiles', function (Blueprint $table) {
            if (Schema::hasColumn('profiles', 'name')) {
                $table->dropColumn(['name']);
            }
            if (!Schema::hasColumn('profiles', 'firstname')) {
                $table->string('firstname')->nullable();
            }
            if (!Schema::hasColumn('profiles', 'lastname')) {
                $table->string('lastname')->nullable();
            }
            if (!Schema::hasColumn('profiles', 'service_id')) {
                $table->unsignedBigInteger('service_id')->nullable();
            }
            if (!Schema::hasColumn('profiles', 'filiere_id')) {
                $table->unsignedBigInteger('filiere_id')->nullable();
            }
            if (!Schema::hasColumn('profiles', 'active_status')) {
                $table->boolean('active_status')->default(0);
            }
            if (!Schema::hasColumn('profiles', 'avatar')) {
                $table->string('avatar')->default('avatar.png');
            }
            if (!Schema::hasColumn('profiles', 'dark_mode')) {
                $table->boolean('dark_mode')->default(0);
            }
            if (!Schema::hasColumn('profiles', 'messenger_color')) {
                $table->string('messenger_color')->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn([
                'firstname', 'lastname', 'service_id', 'filiere_id',
                'active_status', 'avatar', 'dark_mode', 'messenger_color'
            ]);
            $table->string('name')->nullable();
        });
    }
}
