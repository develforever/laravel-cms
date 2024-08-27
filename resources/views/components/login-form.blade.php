<div>

    <form method="POST" action="/auth">
        @csrf

        <input id="email"
            type="text"
            required
            name="email"
            class="@error('email') is-invalid @enderror">

        @error('email')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <input id="pass"
            type="password"
            name="password"
            required
            class="@error('pass') is-invalid @enderror">

        @error('pass')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <button type="submit">Sign in</button>
    </form>


</div>