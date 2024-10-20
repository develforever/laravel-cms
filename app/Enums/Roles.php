<?php

namespace App\Enums;

enum Roles: string
{

    case ADMIN = 'admin';
    case EDITOR = 'editor';
    case USER = 'user';

    static function toTokenAbility(string $role)
    {
        $map = [
            self::ADMIN->value => array_map(function ($e) {
                return $e->value;
            }, TokenAbilities::cases()),
            self::EDITOR->value => [TokenAbilities::MAIN_PANEL_API, TokenAbilities::PAGE_STORE, TokenAbilities::MAIN_PANEL_API::PAGE_UPDATE, TokenAbilities::MAIN_PANEL_API::PAGE_SHOW],
            self::USER->value => [TokenAbilities::MAIN_PANEL_API],
        ];

        return $map[$role];
    }
}
