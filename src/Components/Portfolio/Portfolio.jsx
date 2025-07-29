import React, { useState } from "react";



export default function Portfolio() {
    const images = [
        "poert1.png",
        "port2.png",
        "port3.png",
        "poert1.png",
        "port2.png",
        "port3.png",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-3">PORTFOLIO COMPONENT</h2>
                <div className="text-center mb-4">
                    <hr className="w-25 mx-auto" />
                    <span className="fs-4">&#9733;</span>
                    <hr className="w-25 mx-auto" />
                </div>

                <div className="row g-4">
                    {images.map((imgSrc, idx) => (
                        <div key={idx} className="col-sm-6 col-md-4">
                            <div
                                className="portfolio-item position-relative rounded overflow-hidden"
                                onClick={() => openModal(imgSrc)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={imgSrc}
                                    className="img-fluid w-100"
                                    alt={`Portfolio ${idx + 1}`}
                                />
                                <div className="overlay d-flex justify-content-center align-items-center">
                                    <span className="plus-icon">+</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {selectedImage && (
                <div className="image-modal" onClick={closeModal}>
                    <img src={selectedImage} className="modal-image" alt="Enlarged" />
                </div>
            )}
        </>
    );
}
