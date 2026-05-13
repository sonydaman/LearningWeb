import React from 'react';

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="fw-bold display-4">About Our College</h1>
                    <p className="lead text-muted">A legacy of learning and innovation.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4">Our History</h2>
                        <p>Founded in 2001, Learning-Tech College has grown from a small institute to a premier educational hub.
                            We believe in providing education that transcends textbooks, focusing on practical skills and
                            character building.</p>
                        <p>Our mission is to foster an environment where students can explore their passions and develop the
                            skills needed to thrive in a rapidly changing world.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            className="img-fluid rounded shadow" alt="Students" />
                    </div>
                </div>

                <div className="row mt-5 pt-5 text-center">
                    <div className="col-md-4">
                        <h3 className="fw-bold">Mission</h3>
                        <p>To provide accessible, high-quality education that empowers individuals.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="fw-bold">Vision</h3>
                        <p>To be a global leader in innovative education and research.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="fw-bold">Values</h3>
                        <p>Integrity, Excellence, Innovation, and Diversity.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
