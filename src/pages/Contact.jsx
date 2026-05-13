import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            {/* Page Header */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="fw-bold display-4">Contact Us</h1>
                    <p className="lead text-muted">We'd love to hear from you.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="container my-5 py-5">
                <div className="row g-5">
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="John Doe" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="name@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="subject" 
                                    placeholder="Admissions, Feedback, etc." 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    rows="5"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Message</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4">Our Location</h2>
                        <div className="card p-0 overflow-hidden mb-4 shadow-sm">
                            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                className="img-fluid" alt="Map Placeholder" />
                        </div>
                        <div className="contact-details">
                            <p><strong>Address:</strong> Chandigarh Group of Colleges, Landran</p>
                            <p><strong>Phone:</strong> +1 234 567 890</p>
                            <p><strong>Email:</strong> vg2006apr@gmail.com</p>
                            <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
