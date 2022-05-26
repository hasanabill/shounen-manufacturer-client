import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${banner})`,

        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl font-bold">Hello there</h1>
                    <p className="text-4xl mb-5">We are manufacturing products with world class quality</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;