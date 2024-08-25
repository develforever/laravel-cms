<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\panel\LoginController as PanelLoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    
    $user = Auth::user();
 
    $id = Auth::id();

    return view('welcome', ['user' => $id]);
})->name('home');

Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::post('/auth', [LoginController::class, 'auth'])->name('auth');

Route::prefix('panel')->group(function () {
    Route::get('/login', [PanelLoginController::class, 'login']);
    Route::post('/auth', [PanelLoginController::class, 'auth']);
})->name('panel_login');