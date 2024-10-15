<?php

namespace App\Console\Commands;

use App\Enums\TokenAbilities;
use App\Models\Page;
use App\Models\User;
use App\Token\PersonalAccessToken;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;

class UserTokenAbilities extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:user-token-abilities {user_id} {token} 
    {--abl=* : ability name or `all`}';

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
        $userId = $this->argument('user_id');
        $token = $this->argument('token');

        $user = User::find($userId);

        $userToken = PersonalAccessToken::findToken($token);

        $all = array_map(function ($c) {
            return $c->value;
        }, TokenAbilities::cases());


        foreach ($this->option('abl') as $abl) {
            if ($abl === 'all') {
                $userToken->abilities = $all;
                break;
            }
        }

        $userToken->save();

        return 0;
    }
}
