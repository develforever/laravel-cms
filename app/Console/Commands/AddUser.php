<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AddUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-user {email} {password} {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $email = $this->argument('email');
        $password = $this->argument('password');
        $name = $this->argument('name');

        $user = new User();
        $user->password = Hash::make($password);
        $user->email = $email;
        $user->name = $name;
        $user->save();

        Log::info('User saved');

        return 0;
    }
}
