<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        
        return view('login');
    }
}
