<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PanelController extends Controller
{
    
    public function index(Request $request){

        return view('panel/index', ['hasApp'=> true]);
    }
}
