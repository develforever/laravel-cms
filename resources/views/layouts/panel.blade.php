<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Panel - {{ $appName }}</title>
    <script>
        const user = {{ intval($user) }};
        console.log( user );

    </script>
    
</head>

<body>
    <div id="root" class="h-100 bg-dark{{$hasApp?' has-app':''}}">
        @yield('content')
    </div>

    @include('shared.js')
</body>

</html>