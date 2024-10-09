@extends( $appLayout)
@section('content')
<div class="d-flex flex-column h-100 w-100">
    <div class="d-flex h-100 h-100 flex-grow-1">
        <div class="p-4 flex-grow-1"></div>
        <div class="flex-fill align-self-center">

           {{ $slot }}

        </div>
        <div class="p-4 flex-grow-1"></div>
    </div>
    <div class="d-flex flex-column p-4">

        <p>Powered by <a href="https://laravel.com/">Laravel</a> and <a href="https://react.dev/">React</a></p>
    </div>
</div>


@endsection