@extends( $appLayout)
@section('content')
<div class="d-flex flex-column h-100">
    <div class="d-flex h-100 h-100 flex-grow-1">
        <div class="p-4 flex-grow-1"></div>
        <div class="flex-fill align-self-center">

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

        </div>
        <div class="p-4 flex-grow-1"></div>
    </div>
    <div class="d-flex flex-column p-4">

        <p>Copyrights &copy; Robert Jamróz &leftarrow;rockfade&#64;gmail.com 2024
        <p>
        <p>Powered by <a href="https://laravel.com/">Laravel</a> and <a href="https://react.dev/">React</a></p>
    </div>
</div>


@endsection