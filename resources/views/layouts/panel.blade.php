<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $appName }}</title>
    <script>
        const user = {{ intval($user) }};
    </script>
    
</head>

<body>
    <div id="root" class="bg-dark d-flex w-100 h-100 justify-content-between{{$hasApp?' has-app':''}}">
        @yield('content')
    </div>

    @include('shared.js')
</body>

</html>