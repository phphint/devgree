const ContactForm = () => {
    return (
        <form className="p-4 p-md-5 border rounded-3 bg-light text-dark">
            {/* Full Name Field */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingFullName" placeholder="John Doe" />
                <label htmlFor="floatingFullName">Full Name</label>
            </div>
            
            {/* Email Field */}
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                <label htmlFor="floatingEmail">Email address</label>
            </div>

            {/* Subject Field */}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingSubject" placeholder="Subject" />
                <label htmlFor="floatingSubject">Subject</label>
            </div>

            {/* Message Textarea */}
            <div className="form-floating mb-3">
                <textarea className="form-control" id="floatingMessage" placeholder="Your message..." style={{height: '100px'}}></textarea>
                <label htmlFor="floatingMessage">Message</label>
            </div>

            {/* Submit Button */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
            <hr className="my-4" />
            <small className="text-muted">We respect your privacy and will not share your information.</small>
        </form>
    );
}

export default ContactForm;
