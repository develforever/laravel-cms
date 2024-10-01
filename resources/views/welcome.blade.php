@extends( $appLayout)
@section('content')
<x-simple-layout>
    <div style="height: 350px;">
        <h3 class="text-center">Welcome to CMS Panel</h3>
        <div class="text-center">
            @guest
            <a href="/login">Login</a>
            @endguest

            @auth
            <a href="/panel">Panel</a><br>
            or<br>
            <a href="/logout">Logout</a>
            @endauth
        </div>
    </div>
</x-simple-layout>


@endsection