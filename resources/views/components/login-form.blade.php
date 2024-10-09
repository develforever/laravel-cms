<div>

    <form method="POST" action="/auth">
        @csrf

        <div>
            <label class="form-label">Email address</label>
            <input id="email"
                type="text"
                required
                autocomplete="username"
                name="email"
                class="@error('email') is-invalid @enderror form-control">

            @error('email')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
        </div>
        <div>
            <label class="form-label">Password</label>
            <input id="pass"
                type="password"
                name="password"
                autocomplete="current-password"
                required
                class="@error('pass') is-invalid @enderror form-control">

            @error('pass')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="pt-4">
        <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>


</div>