import React from "react";
import { useParams } from "react-router";
import { therapists } from "../Data/Data";
import { useNavigate } from "react-router";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";

const Userview = () => {
  const navigate = useNavigate();

  const handleProfileClick = (id) => {
    navigate(`/userprofile/${id}`);
  };
  const { id } = useParams();
  const therapist = therapists.find((t) => t.id.toString() === id);

  if (!therapist)
    return <div className="p-10 text-center">Therapist not found</div>;

  return (
    <div className="bg-[#d1dbe7] min-h-screen px-4 py-8 flex flex-col items-center">
      {/* Profile Card */}
      <div
        onClick={() => handleProfileClick(therapist.id)}
        className="lg:bg-white rounded-2xl shadow-md flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-10 mb-8 max-w-6xl w-full gap-6"
      >
        <img
          src={therapist.imageUrl}
          alt={therapist.name}
          className="w-32 h-32 lg:w-[272px] lg:h-[264px] rounded-full object-cover"
        />
        <div className="text-center lg:text-left flex-1 lg:mt-[4rem]">
          <h2 className="text-2xl font-bold">{therapist.name}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Member since January 2020
          </p>
          <p className="font-semibold mt-2">Mental Health Consultant</p>
          <p className="text-gray-700 mt-2">{therapist.description}</p>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="lg:bg-white rounded-2xl shadow-md p-6 max-w-6xl w-full mb-8">
        <h3 className="text-xl font-semibold mb-6">Ratings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-yellow-500 text-lg">★★★★☆</p>
            <p className="text-gray-700 mt-2">
              Manju helped me regain confidence and manage my anxiety
              effectively! - [Client Name]
            </p>
          </div>
          <div>
            <p className="text-yellow-500 text-lg">★★★☆☆</p>
            <p className="text-gray-700 mt-2">
              A truly compassionate and understanding consultant! - [Client
              Name]
            </p>
          </div>
        </div>
      </div>

      {/* Availability and Booking */}
      <div className="lg:bg-white rounded-2xl shadow-md p-6 max-w-6xl w-full">
        <h3 className="text-xl font-semibold mb-6">
          Availability and Bookings
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl mt-5"><HiCalendarDateRange className="bg-yellow-400 rounded-full h-10 w-10 p-1"/></div>
            <p className="flex items-center gap-2 lg:mt-7">
              <span className="font-semibold">Available Sessions:</span> Sunday,
              Tuesday, Thursday (8:00am - 4:00pm)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl"><IoLocationOutline className="bg-yellow-400 rounded-full h-10 w-10 p-1"/></div>
            <p className="flex items-center gap-2 mt-2">
              <span className="font-semibold">Location:</span> Kathmandu
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl"><IoCallOutline className="bg-yellow-400 rounded-full h-10 w-10 p-1"/></div>
            <p className="flex items-center gap-2 mt-2">
              <span className="font-semibold">Contact:</span> 980754858
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userview;
