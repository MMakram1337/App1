import React, { useState } from "react";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        userName: "",
        userAge: "",
        userEmail: "",
        userPassword: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your submission logic here
    }

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-sm border-0 rounded-4">
                            <div className="card-body p-4">
                                <h3 className="text-center mb-4 fw-bold">Contact Section</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="userName"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="userAge" className="form-label">Age</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="userAge"
                                            name="userAge"
                                            value={formData.userAge}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="userEmail"
                                            name="userEmail"
                                            value={formData.userEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="userPassword" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="userPassword"
                                            name="userPassword"
                                            value={formData.userPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


