<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageCollection;
use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return new PageCollection(Page::paginate(4));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user = Auth::id();
        $attrs = $request->all();
        $attrs['autor_user_id'] = $user;

        $page = Page::factory()->make($attrs);
        $page->save();

        return $page;
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        return new PageResource($page);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        //
    }
}
