import React from 'react';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-dark text-white py-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Location</h5>
                                <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Around the Web</h5>
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <a href="#" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
                                    <a href="#" className="text-white"><i className="fab fa-linkedin-in fa-lg"></i></a>
                                    <a href="#" className="text-white"><i className="fas fa-globe fa-lg"></i></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5 className="text-uppercase">About Freelancer</h5>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary text-center text-white py-3">
                    <p className="mb-0">Copyright © Your Website 2021</p>
                </div>
            </footer>


        </>
    );
}
