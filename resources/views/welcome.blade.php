@extends( $appLayout)
@section('content')
<div class="d-flex">
    <div></div>
    <div>
        <h3>Welcome</h3>

        @guest
        <a href="/login">Login</a>
        @endguest

        @auth
        <a href="/panel">Panel</a>
        <a href="/logout">Logout</a>
        @endauth
        

    </div>
    <div></div>
</div>

@endsection