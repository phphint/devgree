const RegForm = () => {
    return (
        <form className="p-4 p-md-5 border rounded-3 bg-light text-dark">
            {/* Full Name Field */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingFullName" placeholder="John Doe" />
                <label htmlFor="floatingFullName">Full Name</label>
            </div>
            
            {/* Email Field */}
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            {/* Password Field */}
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            {/* Remember Me Checkbox */}
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>

            {/* Submit Button */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up for Free</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
    );
}

export default RegForm;
