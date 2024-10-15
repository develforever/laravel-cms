<?php

use App\Enums\TokenAbilities;
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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return [
        'data' => $request->user(),
        'links'=> [
            'self' => route('page.list', null, false),
        ],
    ];
});

Route::group([
    'prefix' => 'page',
    'middleware' => ['auth:sanctum']
], function () {

    Route::middleware([])->get('/list', [PageController::class, 'index'])->name('page.list');
    Route::middleware(['abilities:'.TokenAbilities::PAGE_STORE->value])->post('/store', [PageController::class, 'store'])->name('page.store');
    Route::middleware(['abilities:'.TokenAbilities::PAGE_SHOW->value])->post('/show/{page}', [PageController::class, 'show'])->name('page.show');
    Route::middleware(['abilities:'.TokenAbilities::PAGE_UPDATE->value])->post('/store/{page}', [PageController::class, 'store'])->name('page.store');
    Route::middleware(['abilities:'.TokenAbilities::PAGE_DESTROY->value])->post('/destroy/{page}', [PageController::class, 'destroy'])->name('page.destroy');
});
