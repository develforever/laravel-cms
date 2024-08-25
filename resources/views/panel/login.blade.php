@extends('layouts.panel')
@section('content')
<form method="POST" action="/panel/auth">
    @csrf
 
    ...
</form>
@endsection