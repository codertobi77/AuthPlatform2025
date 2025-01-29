<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ImportExternalUsersTable extends Migration
{
    public function up()
    {
        Schema::create('external_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email', 1000)->unique();
            $table->unsignedBigInteger('role_id')->nullable();
            $table->unsignedBigInteger('service_id')->nullable();
            $table->unsignedBigInteger('filiere_id')->nullable();
            $table->string('password');
            $table->string('remember_token', 100)->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->boolean('active_status')->default(0);
            $table->string('avatar')->default('avatar.png');
            $table->boolean('dark_mode')->default(0);
            $table->string('messenger_color')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('external_users');
    }
}
