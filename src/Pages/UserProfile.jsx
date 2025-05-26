import React, { useState } from "react";
import { useParams } from "react-router";
import { therapists } from "../Data/Data";
import { HiCalendarDateRange } from "react-icons/hi2";
import { useNavigate } from "react-router";
import a from "../assets/a1.png";
import b from "../assets/a2.png";

const UserProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const therapist = therapists.find((t) => t.id.toString() === id);

  const [isEditing, setIsEditing] = useState(false);
  const [isRescheduled, setIsRescheduled] = useState(false);

  const [editName, setEditName] = useState(therapist?.name || "");
  const [editBio, setEditBio] = useState(therapist?.bio || "");
  const [editEmail, setEditEmail] = useState(therapist?.email || "");
  const [editUsername, setEditUsername] = useState(therapist?.username || "");
  const [editDob, setEditDob] = useState(therapist?.dob || "");

  if (!therapist) {
    return (
      <div className="text-center py-20 text-2xl text-red-600">
        Therapist not found
      </div>
    );
  }

  const handleSave = () => {
    therapist.name = editName;
    therapist.bio = editBio;
    therapist.email = editEmail;
    therapist.username = editUsername;
    therapist.dob = editDob;

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-[#bcccdc] min-h-screen">
      {/* Profile Header */}
      <div className="lg:bg-white rounded-xl shadow-lg p-6 w-full max-w-5xl flex flex-col lg:flex-row items-center">
        <img
          src={therapist.imageUrl}
          alt="Profile"
          className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover mb-4 lg:mb-0 lg:mr-10"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{therapist.name}</h1>
          <p className="text-gray-500 text-sm">Member since January 2020</p>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">
              Mental Health Consultant.
            </p>
            <p className="text-gray-600 mt-1">
              At Auditor, we believe that mental health support should be
              accessible, compassionate, and personalized.
            </p>
          </div>

          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 hover:bg-amber-300 text-black px-6 py-2 mt-6 rounded-md shadow transition"
            >
              Edit profile
            </button>
            <button
              onClick={() => navigate("/createablog")}
              className="bg-yellow-400 hover:bg-amber-300 text-black px-6 py-2 mt-6 rounded-md shadow transition"
            >
              Write a blog
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Edit your profile
            </h2>
            <img
              src={therapist.imageUrl}
              alt={therapist.name}
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <p className="font-semibold mt-2">{therapist.name}</p>

            <div className="mt-6 space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={editDob}
                  onChange={(e) => setEditDob(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handleSave}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md"
              >
                Update Profile
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-blue-100 hover:bg-blue-200 text-black font-medium py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Session */}
      <div className="w-full h-auto max-w-5xl mt-10 p-6 lg:bg-white rounded-xl shadow-md">
        <h2 className="text-2xl mt-10 font-semibold">Upcoming Sessions</h2>
        <div className="w-full max-w-5xl mt-4 p-4 bg-white rounded-xl shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <HiCalendarDateRange className="text-black w-5 h-5" />
            <div>
              <h4 className="font-semibold text-sm">{therapist.name}</h4>
              <p className="text-xs text-gray-600">25th March, 8am</p>
            </div>
          </div>
          <button
            onClick={() => setIsRescheduled(true)}
            className="bg-yellow-400 hover:bg-amber-300 text-black px-4 py-1 rounded-md transition shadow"
          >
            Reschedule
          </button>
        </div>
      </div>

      {/* Reschedule Modal */}
      {isRescheduled && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl text-center overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Upcoming Sessions
            </h2>
            <div className="space-y-4">
              {[
                { name: "Anusha Shrestha", defaultDate: "2025-03-25T08:00" },
                { name: "Bhabana Dangi", defaultDate: "2025-04-01T10:00" },
                { name: "Dipshan Pokharel", defaultDate: "2025-04-02T15:00" },
                { name: "Sneha Shrestha", defaultDate: "2025-04-05T14:00" },
                { name: "Bidhan Shrestha", defaultDate: "2025-04-15T07:00" },
              ].map((session, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <HiCalendarDateRange className="text-black w-5 h-5" />
                    <div>
                      <h4 className="font-semibold text-sm">{session.name}</h4>
                      <input
                        type="datetime-local"
                        defaultValue={session.defaultDate}
                        className="text-xs border px-2 py-1 rounded mt-1"
                      />
                    </div>
                  </div>
                  <button className="mt-2 sm:mt-0 bg-yellow-400 hover:bg-amber-300 text-black px-4 py-1 rounded-md transition shadow">
                    Save
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsRescheduled(false)}
              className="bg-blue-100 hover:bg-blue-200 text-black font-medium py-2 px-4 mt-6 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Blogs Section */}
      <div className="w-full max-w-5xl mt-10 p-6 lg:bg-white rounded-xl shadow-md">
        <h2 className="text-xl mt-10 font-semibold">My Blogs</h2>
        <div className="flex flex-wrap gap-6 justify-center lg:bg-white lg:p-4 lg:rounded-[30px] lg:shadow-md lg:w-[960px] lg:h-[400px] mt-10">
          <div className="w-[311px] mt-6">
            <img
              src={a}
              alt="Blog 1"
              className="rounded-lg w-full h-[197px] object-cover"
            />
            <h3 className="mt-2 font-semibold">
              The Cycle of Codependency and Addiction
            </h3>
            <p className="text-sm text-gray-600">By Ryan Egan</p>
          </div>
          <div className="w-[311px] mt-6">
            <img
              src={b}
              alt="Blog 2"
              className="rounded-lg w-full h-[197px] object-cover"
            />
            <h3 className="mt-2 font-semibold">
              Prioritizing Mental Health: A Vital Imperative
            </h3>
            <p className="text-sm text-gray-600">By Sarika Thapa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
