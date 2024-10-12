<?php

use App\Http\Controllers\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth')->get('/info', function (Request $request) {
    return [$request->user()];
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'page',
    'middleware' => ['auth:sanctum']
], function () {
    Route::middleware([])->get('/list', [PageController::class, 'index']);
    Route::middleware(['abilities:page-store'])->post('/store', [PageController::class, 'store']);
});
