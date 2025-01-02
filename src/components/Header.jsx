import React from "react";
import { assets } from "../assets/assets";


  
    const Header = () => {
      return (
       
      
       <div className="Home-background">



          {/* Left Section */}
          <div className="md:w-1/2 relative flex items-start justify-center">
  {/* Content Wrapper */}
  <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px] absolute top-1/2 left-0 transform -translate-y-1/2">
    {/* Heading */}
    <p className="text-4xl md:text-7xl lg:text-8xl text-black font-semibold leading-snug lg:leading-tight">
      Book Appointment <br /> With Trusted Doctors
    </p>

    {/* Info Section */}
    <div className="mt-4 flex flex-col items-start">
      <img src={assets.groupimage} alt="Group" className="w-20 h-20"  width={"10%"}/>
      <p className="mt-4 text-lg md:text-5xl text-gray-800 leading-relaxed">
        Simply browse through our extensive list of trusted doctors <br />
        and schedule your appointment hassle-free.
      </p>
    </div>

    {/* Buttons Section */}
    <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-light">
      {/* Book Appointment Button */}
      <a
        href="#Speciality"
        className="group flex items-center gap-2 bg-blue-500 text-Black py-3 px-8 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out focus:ring-2 focus:ring-blue-300 focus:outline-none"
        aria-label="Book an appointment"
      >
        <span className="text-lg md:text-xl font-medium">Book Appointment</span>
        <img
          src={assets.arrow_icon}
          alt="arrow icon"
          className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>
</div>


          {/* Right Section */}
      
          <div className="md:w-1/2 flex items-start relative">
        <img
         className="w-1/2 max-w-full h-auto rounded-lg mr-auto p-2"
          
         
          alt=""
        />
          </div>
        </div>

    
      );
    };
    
    export default Header;
    