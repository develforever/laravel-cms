<?php

namespace App\Services;

use App\Enums\TokenAbilities;
use App\Models\User;

class UserTokenService {
    
    public function makeToken(User $user){

        $token = $user->createToken('panel',  [],  now()->addHours(3));

        return $token;
    }

}