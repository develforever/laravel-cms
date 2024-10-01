@extends( $appLayout)
@section('content')
<div class="d-flex flex-column h-100">
    <div class="d-flex h-100 h-100 flex-grow-1">
        <div class="p-4 flex-grow-1"></div>
        <div class="flex-fill align-self-center">

           {{ $slot }}

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