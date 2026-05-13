import React from 'react';
import libraryImg from '../assets/library.png';

const Gallery = () => {
    const images = [
        { src: libraryImg, alt: "Library" },
        { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Lecture Hall" },
        { src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Sports Day" },
        { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Student Lounge" },
        { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Classroom" },
        { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Campus Life" }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="fw-bold display-4">Campus Gallery</h1>
                    <p className="lead text-muted">Glimpses of life at Learning-Tech.</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="container my-5 py-5">
                <div className="row g-4">
                    {images.map((img, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card gallery-item">
                                <img src={img.src} className="card-img-top" alt={img.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Gallery;
