import React from "react";
import { SpecialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
    return (
        <div className="flex flex-col items-center gap-8 py-16 text-gray-800" id="Speciality">
            <h1 className="text-3xl font-medium">Find my Speciality</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Simply browse through our extensive list of trusted doctors
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 w-full max-w-5xl mx-auto justify-items-center">
                {SpecialityData.map((item, index) => (
                    <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex flex-col items-center text-center cursor-pointer transition-transform transform hover:-translate-y-2 duration-500"
                        key={index}
                        to={`/doctors/${item.Speciality}`}
                    >
                        <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-2">
                            <img
                                src={item.image}
                                alt={item.Speciality}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-semibold">{item.Speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
