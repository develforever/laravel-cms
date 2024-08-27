<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script type="module">
        import React from '/panel/external/es-react.js';
        import ReactDOM from '/panel/external/es-react-dom.js';
        </script>

        <title>Panel - {{ $app_name }}</title>

    </head>
    <body>
        <div class="root">
            @yield('content')
        </div>
        <script type="module">
            import app from '{{ asset("/panel/app.js") }} ';
        </script>
    </body>
</html>