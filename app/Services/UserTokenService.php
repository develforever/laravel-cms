<?php

namespace App\Services;

use App\Enums\Roles;
use App\Enums\TokenAbilities;
use App\Events\BeforeCreateToken;
use App\Models\User;

class UserTokenService {
    
    public function makeToken(User $user){

        $abilities = Roles::toTokenAbility($user->role);
        
        $token = $user->createToken('panel',  $abilities,  now()->addHours(3));

        return $token;
    }

}