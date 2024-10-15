<?php

namespace App\Enums;

enum TokenAbilities:string {

    case MAIN_PANEL_API = 'panel:api';
    
    // Page
    case PAGE_STORE = 'page-store';
    case PAGE_SHOW = 'page-show';
    case PAGE_UPDATE = 'page-update';
    case PAGE_DESTROY = 'page-destroy';
};