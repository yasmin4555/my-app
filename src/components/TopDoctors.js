import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Top doctors.css";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";

const TopDoctors = () => {
  const { Doctors } = useContext(AppContext); // Fetch doctors from context
  const navigate = useNavigate(); // For navigation

  // Check if Doctors data is available
  if (!Doctors || Doctors.length === 0) {
    return <p className="no-doctors-message">No doctors found. Please try again later.</p>;
  }

  return (
    <div className="top-doctors-container">
      <h2 className="heading">Top Doctors</h2>
      <div className="doctors-row">
        {Doctors.slice(0, 4).
map((doctor) => (
          <div
            key={doctor.docid} // Use docid as the key

            className="doctor-card cursor-pointer"
            

            onClick={() => navigate(`/Appointment/${doctor.docid}`)}

 // Navigate to Appointment page
          >
           
            <div className="doctor-image-container">
              <img
                 src={doctor.image || "https://via.placeholder.com/150"}
                alt={doctor.name || "Doctor"}
                className="doctor-image"
              />
            </div>
            <p className="doctor-name">{doctor.name || "N/A"}</p>
            <p className="doctor-speciality">{doctor.speciality || "General Practitioner"}</p>
            <button
              className={`availability-button ${
                doctor.available ? "available" : "not-available"
              }`}
            >
              {doctor.available ? "Available" : "Not Available"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
