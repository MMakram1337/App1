import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
                <div className="container">
                    {/* Brand on left */}
                    <Link className="navbar-brand fw-bold fs-3" to="/">StartFramework</Link>

                    {/* Toggler for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Links on right */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
