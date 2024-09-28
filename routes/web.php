<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PanelController;
use Illuminate\Http\Request;
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
    return view('welcome');
})->name('home');

Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');
Route::post('/auth', [LoginController::class, 'auth'])->name('auth');

Route::prefix('panel')->group(function () {
    Route::get('/', [PanelController::class, 'index'])->name('panel');
});

Route::post('/user/token/create', function (Request $request) {

    $user =  $request->user();
    $token = $user->createToken($request->token_name, ['panel:api']);
    $tokenText = $token->plaintTextToken;

    return ['token' => $tokenText];
})->middleware('auth');
