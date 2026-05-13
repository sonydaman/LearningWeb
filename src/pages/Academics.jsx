import React from 'react';

const Academics = () => {
    const departments = [
        {
            title: "Computer Science",
            description: "Focusing on software development, AI, and cybersecurity. Our labs are equipped with the latest technology to ensure hands-on experience.",
            courses: ["B.Sc. in Computer Science", "M.Sc. in Data Science", "Diploma in Web Development"]
        },
        {
            title: "Business Administration",
            description: "Preparing the next generation of business leaders with a focus on entrepreneurship, marketing, and finance.",
            courses: ["BBA (Honors)", "MBA in Strategic Management", "Short Course in Digital Marketing"]
        },
        {
            title: "Engineering",
            description: "Innovative programs in Civil, Mechanical, and Electrical engineering with a strong emphasis on research and sustainability.",
            courses: ["B.Tech in Civil Engineering", "B.Tech in Electrical Engineering", "Research Program in Robotics"]
        },
        {
            title: "Arts & Sciences",
            description: "Diverse programs in Psychology, Sociology, and Pure Sciences designed to foster critical thinking and curiosity.",
            courses: ["B.A. in Psychology", "B.Sc. in Physics", "Master's in Literature"]
        }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="fw-bold display-4">Academics</h1>
                    <p className="lead text-muted">Excellence in every discipline.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container my-5 py-5">
                <div className="row g-4">
                    {departments.map((dept, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="fw-bold">{dept.title}</h3>
                                    <p>{dept.description}</p>
                                    <ul>
                                        {dept.courses.map((course, cIndex) => (
                                            <li key={cIndex}>{course}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Academics;
