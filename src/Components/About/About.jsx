import React from 'react'

export default function About() {
    return (
        <> <section className="about-section text-white text-center py-5 vh-100 justify-content-center align-content-center">
            <div className="container">
                <h2 className="text-uppercase mb-4">About Component</h2>
                <div className="divider-custom d-flex align-items-center justify-content-center mb-4">
                    <div className="divider-line"></div>
                    <div className="divider-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p className="lead">
                            Freelancer is a free bootstrap theme created by Route. The
                            download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p className="lead">
                            Freelancer is a free bootstrap theme created by Route. The
                            download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </p>
                    </div>
                </div>
            </div>
        </section></>
    )
}
