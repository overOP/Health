import React, { useEffect, useState } from "react";
import { http } from "../config/Axios";
import { CiSearch } from "react-icons/ci";
import { therapists } from "../Data/Data";
import { useNavigate } from "react-router";

export const Therapists = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/userview/${id}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      sendApi(debouncedValue);
    }
  }, [debouncedValue]);

  async function sendApi(value) {
    try {
      console.log("API called with:", value);
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

  const handleTagClick = (tag) => {
    setValue(tag);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#bcccdc] lg:p-11">
      <h1
        className="text-2xl mt-10 lg:text-white lg:text-5xl"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        Connect with a Therapist
      </h1>

      <div className="relative mt-10">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search"
          className="bg-gray-100 border-2 border-gray-800 rounded-full w-[312px] pl-10 lg:w-[50rem] lg:h-[3rem]"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
        />
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      <div className="lg:flex lg:justify-center lg:gap-10">
        <div className="flex justify-center gap-10">
          <button
            onClick={() => handleTagClick("Anxiety")}
            className="bg-[#f6ca56] mt-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
          >
            Anxiety
          </button>
          <button
            onClick={() => handleTagClick("Depression")}
            className="bg-[#f6ca56] mt-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
          >
            Depression
          </button>
        </div>
        <div className="flex justify-center gap-10">
          <button
            onClick={() => handleTagClick("Lonliness")}
            className="bg-[#f6ca56] mt-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
          >
            Lonliness
          </button>
          <button
            onClick={() => handleTagClick("Grief")}
            className="bg-[#f6ca56] mt-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
          >
            Grief
          </button>
          <button
            onClick={() => handleTagClick("PTSD")}
            className="bg-[#f6ca56] mt-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
          >
            PTSD
          </button>
        </div>
      </div>

      <div
        className="lg:bg-white lg:mt-[20px] lg:h-auto rounded-[20px] lg:p-11"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2 className="text-2xl mr-40 mt-10 lg:mr-[44rem]">Top Therapists</h2>
        <p className="hidden lg:block lg:mr-[22rem] lg:mt-10">
          You don’t have to go through it alone—connect with a professional
          today.
        </p>

        <div className="mt-10 p-5">
          <div>
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="flex items-center mb-4 shadow-lg rounded-xl p-4"
              >
                <img
                  src={therapist.imageUrl}
                  alt={therapist.name}
                  className="w-28 h-28 rounded-full mr-4 mb-16"
                />
                <div className="flex flex-col lg:flex-row lg:mb-12 lg:gap-[34rem]">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {therapist.name}
                    </h3>
                    <p className="text-gray-600 lg:w-[22rem]">
                      {therapist.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleView(therapist.id)}
                    className="bg-[#f6ca56] mt-10 h-10 rounded-[10px] text-black px-4 py-2 hover:bg-amber-300 hover:shadow-lg transition duration-300"
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
