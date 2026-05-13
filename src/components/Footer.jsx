import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="fw-bold mb-4">Learning-Tech</h4>
                        <p>Building the next generation of leaders and innovators through quality education.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-bold mb-4">Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/academics">Academics</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/profile">Student Profile</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-bold mb-4">Contact Info</h4>
                        <p>123 College Lane, Tech City<br />Phone: +1 234 567 890<br />Email: info@learning-tech.edu</p>
                    </div>
                </div>
                <hr className="mt-4 border-light" />
                <p className="text-center mb-0">&copy; 2026 Learning-Tech College. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
