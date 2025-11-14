import React from 'react';

const Banner = () => {
    return (

        <div className="hero min-h-screen bg-base-200 border-amber-50">

            <div className="hero-content max-w-7xl mx-auto flex-col lg:flex-row-reverse p-4 sm:p-8 w-full">

                {/* --- Image Section (Right Side) --- */}
                <div className="lg:w-1/2 flex justify-center items-center p-4">
                    <div className="relative w-full max-w-md h-96">
                        {/* Image 1: Main/Larger Image */}
                        <img
                            src="assets/banner-img-1.png"
                            className="w-3/4 h-3/4 object-cover rounded-box shadow-2xl absolute top-0 left-0 transform -rotate-3 hover:rotate-0 transition duration-500 ease-in-out"
                            alt="Stylish modern architecture"
                        />
                        {/* Image 2: Secondary/Smaller Image (Overlapping) */}
                        <img
                            src="assets/doctor-sample.png"
                            className="w-1/2 h-1/2 object-cover rounded-box shadow-2xl absolute bottom-0 right-0 transform rotate-6 hover:rotate-0 transition duration-500 ease-in-out"
                            alt="Modern interior design"
                        />
                    </div>
                </div>

                {/* --- Text and Search Bar Section (Left Side) --- */}
                <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 p-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        Dependable Care, Backed by Trusted Professionals.
                    </h1>
                    <p className="py-6 text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eius ex? Quaerat impedit numquam consequatur asperiores reprehenderit quibusdam eos eius
                    </p>

                    {/* Search Bar with Button (Flex) */}
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
                        <input
                            type="text"
                            placeholder="Search for you doctors"
                            className="input input-bordered input-lg w-full"
                        />
                        <button className="btn btn-primary btn-lg">
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;