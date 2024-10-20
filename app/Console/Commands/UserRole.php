<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:user-role {id} {role}';

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

        $id = $this->argument('id');
        $role = $this->argument('role');

        $user = User::find($id);
        if ($user->role != $role) {
            $user->role = $role;
            $user->save();
            Log::info("User role saved: {$id} {$role}");
        }

        return 0;
    }
}
