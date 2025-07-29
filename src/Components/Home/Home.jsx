import React from "react";


export default function Home() {
    return (
        <>
            <main className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
                <img className="avatar mb-4" src="/avataaars.svg" alt="avatar" />
                <h1 className="fw-bold text-white">START FRAMEWORK</h1>
                <div className="divider d-flex align-items-center my-3">
                    <div className="line"></div>
                    <div className="star mx-3">★</div>
                    <div className="line"></div>
                </div>
                <p className="text-white fs-5">Graphic Artist - Web Designer - Illustrator</p>
            </main>
        </>
    );
}
