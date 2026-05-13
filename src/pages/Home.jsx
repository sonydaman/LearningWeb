import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/college_campus_hero_1778502146150.png';

const Home = () => {
    return (
        <>
            {/* Hero Carousel */}
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={heroImg} className="d-block w-100" alt="College Campus" />
                        <div className="carousel-caption">
                            <h1 className="display-3 fw-bold animate-fade-in">Welcome to Learning-Tech</h1>
                            <p className="lead">Empowering Minds, Shaping Futures.</p>
                            <Link to="/academics" className="btn btn-primary btn-lg">Explore Courses</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
            <section className="container my-5 py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Choose Us?</h2>
                    <p className="text-muted">Providing world-class education and facilities for over 25 years.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Modern Labs</h4>
                                <p className="card-text">State-of-the-art facilities for research and practical learning.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Expert Faculty</h4>
                                <p className="card-text">Experienced educators dedicated to student success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Global Careers</h4>
                                <p className="card-text">Excellent placement record with top international companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
