import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const { Speciality } = useParams(); // Fetches the Speciality from the URL params
  const [filterDoc, setFilterDoc] = useState([]);
  const { Doctors } = useContext(AppContext); // Assuming this context provides the doctors list
  const navigate = useNavigate();

  // Filters the doctors based on the selected specialty
  const applyFilter = () => {
    if (Doctors && Speciality) {
      setFilterDoc(Doctors.filter(doc => doc.Speciality === Speciality));
    } else if (Doctors) {
      setFilterDoc(Doctors);
    }
  };

  // Applies filter when Doctors data or Speciality changes
  useEffect(() => {
    applyFilter();
  }, [Doctors, Speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors by specialty</p>

      {/* Specialty Filter */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
  
          </div>
  
      </div>

        {/* Doctors Table */}
        <div className="w-full  grid grid-cols-auto gap-4 gap-y-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Doctor</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Specialty</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filterDoc.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="border-b cursor-pointer hover:bg-gray-100"
                >
                  {/* Doctor's Image and Name */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="text-gray-900 font-medium">{item.name}</p>
                    </div>
                  </td>
                  
                  {/* Specialty */}
                  <td className="py-3 px-4 text-gray-600">{item.speciality}</td>
                  
                  {/* Availability */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {item.available ? 'Available' : 'Not Available'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
</div>

  );
};

export default Doctors;
