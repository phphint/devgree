const LoginForm = () => {
    return (
        <form className="p-4 p-md-5 border rounded-3 bg-light text-dark">
            {/* Email Field */}
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="loginFloatingInput" placeholder="name@example.com" />
                <label htmlFor="loginFloatingInput">Email address</label>
            </div>

            {/* Password Field */}
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="loginFloatingPassword" placeholder="Password" />
                <label htmlFor="loginFloatingPassword">Password</label>
            </div>

            {/* Remember Me Checkbox */}
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>

            {/* Submit Button */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <hr className="my-4" />
            <small className="text-muted">By logging in, you agree to our terms of use.</small>
        </form>
    );
}

export default LoginForm;
