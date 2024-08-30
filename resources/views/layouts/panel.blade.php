<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Panel - {{ $app_name }}</title>

    <script type="importmap">
        {
            "imports": {
                "app":"{{ asset("/js/app.mjs") }}",
                "redux":"/npm/redux/dist/redux.legacy-esm.js",
                "immer": "/npm/immer/dist/immer.mjs",
                "reselect":"/npm/reselect/dist/reselect.browser.mjs",
                "redux-thunk":"/npm/redux-thunk/dist/redux-thunk.mjs",
                "@reduxjs/toolkit":"/npm/@reduxjs/toolkit/dist/redux-toolkit.browser.mjs",
                "react-redux":"/npm/react-redux/dist/react-redux.mjs",
                "es-react": "/npm/es-react/react.js",
                "es-react-dom": "/npm/es-react/react-dom.js"
            }
        }
    </script>

    <script src="/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/app.css">

</head>

<body>
    <div id="root" class="container-fluid">
        @yield('content')
    </div>

    <script type="module">
        import app from 'app';
        app();
    </script>
</body>

</html>