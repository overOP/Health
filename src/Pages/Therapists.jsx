import React, { useEffect, useState } from "react";
import { http } from "../config/Axios";
import { CiSearch } from "react-icons/ci";
import { therapists } from "../Data/Data";
import { useNavigate } from "react-router";

export const Therapists = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const navigate = useNavigate();

  const handleView = (id) => navigate(`/userview/${id}`);
  const handleChange = (e) => setValue(e.target.value);
  const handleTagClick = (tag) => setValue(tag);

  useEffect(() => {
    const timerID = setTimeout(() => setDebouncedValue(value), 3000);
    return () => clearTimeout(timerID);
  }, [value]);

  useEffect(() => {
    if (debouncedValue) sendApi(debouncedValue);
  }, [debouncedValue]);

  async function sendApi(value) {
    try {
      const res = await http.get("/user/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center bg-[#bcccdc] px-4 py-8 lg:px-16">
      <h1 className="text-2xl mt-4 text-center lg:text-white lg:text-5xl" data-aos="fade-up">
        Connect with a Therapist
      </h1>

      {/* Search */}
      <div className="relative mt-8 w-full max-w-xl">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search"
          className="w-full bg-gray-100 border-2 border-gray-800 rounded-full pl-10 pr-4 py-2 lg:h-12"
        />
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
      </div>

      {/* Tag Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {["Anxiety", "Depression", "Lonliness", "Grief", "PTSD"].map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="bg-[#f6ca56] rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Therapist Cards */}
      <div className="bg-white rounded-[20px] w-full max-w-7xl mt-12 p-6 md:p-8" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-2">Top Therapists</h2>
        <p className="text-sm text-gray-600 mb-6 hidden md:block">
          You don’t have to go through it alone—connect with a professional today.
        </p>

        <div className="space-y-6">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="flex flex-col md:flex-row items-center md:items-start md:justify-between bg-white shadow-md rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={therapist.imageUrl}
                  alt={therapist.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{therapist.name}</h3>
                  <p className="text-gray-600 max-w-md">{therapist.description}</p>
                </div>
              </div>

              <button
                onClick={() => handleView(therapist.id)}
                className="bg-[#f6ca56] mt-4 md:mt-0 h-10 rounded-[10px] text-black px-5 py-2 hover:bg-amber-300 hover:shadow-lg transition"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
