import React from 'react';
import profileAvatar from '../assets/profile_avatar.png';

const Profile = () => {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "Bootstrap 5",
        "React.js", "JAVA", "Node.js", "Git & GitHub"
    ];

    return (
        <>
            {/* Profile Header */}
            <header className="profile-header">
                <div className="container">
                    <img src={profileAvatar} alt="Profile Picture" className="profile-img shadow animate-fade-in" />
                    <h1 className="display-4 fw-bold">Vanshika Gupta</h1>
                    <p className="lead">Aspiring Software Developer | Computer Science Student</p>
                    <div className="mt-4">
                        <a href="mailto:vanshugupta816@gmail.com" className="btn btn-warning fw-bold">Hire Me</a>
                        <a href="#" className="btn btn-outline-light ms-2">Download Resume</a>
                    </div>
                </div>
            </header>

            {/* Profile Details */}
            <section className="container my-5 py-5">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm h-100">
                            <h3 className="fw-bold mb-4">Skills</h3>
                            <div className="skills-container">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card p-4 shadow-sm mb-4">
                            <h3 className="fw-bold mb-4">Professional Summary</h3>
                            <p>I am a passionate Computer Science student at Learning-Tech College with a strong foundation in
                                web development and software engineering. I love building responsive, user-friendly applications
                                and solving complex problems with code.</p>
                        </div>
                        <div className="card p-4 shadow-sm mb-4">
                            <h3 className="fw-bold mb-4">Experience</h3>
                            <div className="experience-item mb-4">
                                <h5 className="fw-bold">Web Development Intern</h5>
                                <p className="text-muted">TechCorp Solutions | June 2025 - Present</p>
                                <ul>
                                    <li>Assisted in building responsive landing pages using Bootstrap.</li>
                                    <li>Collaborated with the design team to implement UI components.</li>
                                    <li>Optimized website performance for mobile devices.</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h5 className="fw-bold">Freelance Front-end Developer</h5>
                                <p className="text-muted">Self-Employed | 2024 - 2025</p>
                                <p>Delivered custom static websites for local businesses using HTML/CSS.</p>
                            </div>
                        </div>
                        <div className="card p-4 shadow-sm">
                            <h3 className="fw-bold mb-4">Education</h3>
                            <div className="education-item">
                                <h5 className="fw-bold">Bachelor of Science in Computer Science</h5>
                                <p className="text-muted">Learning-Tech College | 2023 - 2027</p>
                                <p>Currently maintaining a 3.9 GPA with a focus on Algorithm Design and Full-stack Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
