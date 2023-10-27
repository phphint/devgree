import RegForm from './RegForm';
const RegSection = () => {
    return (
        <section className="container mx-auto py-5 text-center text-lg-start bg-dark text-white">
            <div className="row align-items-center g-lg-5">
                <div className="col-lg-7">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Ready to Begin?</h1>
                    <p className="col-lg-10 fs-4">Start your journey with Devgree today and be among the first to experience our groundbreaking certifications feature when it launches.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <RegForm />
                </div>
            </div>
        </section>
    );
}

export default RegSection;
