<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\panel\LoginController as PanelLoginController;
use App\Http\Controllers\panel\IndexController as PanelIndexController;
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
Route::get('/logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');
Route::post('/auth', [LoginController::class, 'auth'])->name('auth');

Route::prefix('panel')->group(function () {
    Route::get('/', [PanelIndexController::class, 'index'])->name('panel_home');
    Route::get('/login', [PanelLoginController::class, 'login'])->name('panel_login');
    Route::get('/logout', [PanelLoginController::class, 'logout'])->name('panel_logout')->middleware('auth');
    Route::post('/auth', [PanelLoginController::class, 'auth'])->name('panel_auth');
})->name('panel');