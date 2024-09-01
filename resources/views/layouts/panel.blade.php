<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Panel - {{ $app_name }}</title>

    @include('shared.imports')
    @include('shared.react')
    @include('shared.styles')
    
</head>

<body>
    <div id="root" class="container-fluid">
        @yield('content')
    </div>

    @include('shared.appjs')
</body>

</html>