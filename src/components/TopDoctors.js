import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


const TopDoctors = () => {
    const navigate = useNavigate();
  const {Doctors}=useContext(AppContext)
   
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {Doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer p-4"
          >
            <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-2">
              <div className="flex items-center gap-2 text-sm text-center">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></span>

              </div>

              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-black rounded">More</button>
    </div>
  );
};

export default TopDoctors;