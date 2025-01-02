import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="flex bg-white rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">Book appointment</p>
                <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">With 100% Trusted Doctors</p>
                
                <button
                    onClick={() => {
                        navigate('/login');
                        setTimeout(() => window.scrollTo(0, 0), 100); // Delay scrollTo slightly
                    }}
                    className="mt-4 px-4 py-2 bg-blue-500 text-Black rounded"
                >
                    Create account
                </button>
            </div>
            
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full absolute-bottom-0 right-0 max-w-md" src={assets.appointment} alt="" />
            </div>
        </div>
    );
};

export default Banner;
