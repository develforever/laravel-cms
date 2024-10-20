<?php

use App\Enums\Roles;
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
        'links' => [
            'page.list' => [
                'path' => route('page.list', null, false),
                'method' => 'GET',
            ],
            'page.store' => [
                'path' => route('page.store', null, false),
                'method' => 'POST',
            ],
            'page.update' => [
                'path' => route('page.update', null, false),
                'method' => 'PATCH',
            ],
            'page.show' => [
                'path' => route('page.show', ['page' => ':id'], false),
                'method' => 'GET',
            ],
            'page.destroy' => [
                'path' => route('page.destroy', ['page' => ':id'], false),
                'method' => 'DELETE',
            ],
        ],
        'meta'=>[
            'token_abilities'=> Roles::toTokenAbility($request->user()->role),
        ],
    ];
});

Route::group([
    'prefix' => 'page',
    'middleware' => ['auth:sanctum']
], function () {

    Route::middleware([])->get('/list', [PageController::class, 'index'])->name('page.list');
    Route::middleware(['abilities:' . TokenAbilities::PAGE_SHOW->value])->get('/show/{page}', [PageController::class, 'show'])->name('page.show');
    Route::middleware(['abilities:' . TokenAbilities::PAGE_STORE->value])->post('/store', [PageController::class, 'store'])->name('page.store');
    Route::middleware(['abilities:' . TokenAbilities::PAGE_STORE->value])->patch('/update', [PageController::class, 'update'])->name('page.update');
    Route::middleware(['abilities:' . TokenAbilities::PAGE_DESTROY->value])->delete('/destroy/{page}', [PageController::class, 'destroy'])->name('page.destroy');
});
