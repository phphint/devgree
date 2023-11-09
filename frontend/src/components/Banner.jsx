import elevateImage from '../assets/images/Elevate_Your_Tech_Portfolio.jpg'; // Adjust the path as necessary


const Banner = () => {
    return (
        <div className="text-center py-5 bg-white text-dark mb-0 pb-0">
            <h1 className="display-4 fw-bold">Elevate Your Tech Portfolio</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
            Step into a new era of showcasing. Upload your projects and skills on your personalized page today, and let our comprehensive skills assessments feature highlight your technical proficiencies to potential employers and peers.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="http://localhost:3000/portfolio/654bca4fc5b943e712bc2518" className="btn btn-primary btn-lg px-4 gap-3">Example Portfolio</a>
                </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '40vh' }}>
                <div className="container col-lg-6 mx-auto">
                <img 
                        src={elevateImage} 
                        className="img-fluid border rounded-3 shadow-lg mb-4 mx-auto mt-5" 
                        alt="Elevate Your Tech Portfolio" 
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
