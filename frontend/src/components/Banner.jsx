const Banner = () => {
    return (
        <div className="text-center py-5 bg-white text-dark mb-0 pb-0">
            <h1 className="display-4 fw-bold">Elevate Your Tech Portfolio</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Step into a new era of showcasing. Upload your projects and skills on your personalized page today. Certifications feature coming soon.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Example Portfolio</button>
                </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '40vh' }}>
                <div className="container col-lg-6 mx-auto">
                    <img 
                        src="https://via.placeholder.com/700x500.png?text=Dashboard" 
                        className="img-fluid border rounded-3 shadow-lg mb-4 mx-auto mt-5" 
                        alt="Example image" 
                        width="700" 
                        height="500" 
                        loading="lazy" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
