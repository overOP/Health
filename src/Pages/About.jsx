import React from "react";
import { useNavigate } from "react-router";
import A from "../assets/1About.png";
import B from "../assets/2About.png";
import C from "../assets/3About.png";
import D from "../assets/4About.png";
import E from "../assets/5About.png";
import F from "../assets/6About.png";

const About = () => {
  const navigate = useNavigate();

  const handleProfileClick = (id) => {
    navigate(`/profilepage/${id}`);
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-[#bcccdc]">
      {/* Hero Section */}
      <div className="flex flex-col items-center w-full py-12 px-4 gap-8 md:py-16 md:px-8 lg:px-16 lg:flex-row-reverse lg:gap-80">
        <img
          src={A}
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] rounded-[25px] lg:mr-20"
          alt="About Our Team"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="100"
        />
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">
            All About Our Team
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-[700px]">
            Mental health is vital to overall well-being, shaping how we think,
            feel, and navigate life. We are committed to raising awareness,
            offering support, and promoting mental wellness for all.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex justify-center w-full py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div
          className="w-full max-w-[1255px] bg-white rounded-[20px] p-6 md:p-8 lg:p-12"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <h2 className="text-2xl font-bold text-center mb-8 md:text-3xl lg:text-4xl">
            Meet the Team
          </h2>
          <div
            className="grid grid-cols-2 gap-6 sm:grid-cols-3"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <div
              onClick={() => handleProfileClick("anusha-shrestha")}
              className="cursor-pointer text-center"
            >
              <img
                src={B}
                className="w-full max-w-[180px] rounded-[20px] mb-4 mx-auto"
                alt="Anusha"
              />
              <h4 className="text-lg font-medium">Anusha Shrestha</h4>
            </div>
            <div
              onClick={() => handleProfileClick("aavash-shahi")}
              className="cursor-pointer text-center"
            >
              <img
                src={C}
                className="w-full max-w-[180px] rounded-[20px] mb-4 mx-auto"
                alt="Aavash"
              />
              <h4 className="text-lg font-medium">Aavash Shahi</h4>
            </div>
            <div
              onClick={() => handleProfileClick("bhabana-dangi")}
              className="cursor-pointer text-center"
            >
              <img
                src={D}
                className="w-full max-w-[180px] rounded-[20px] mb-4 mx-auto"
                alt="Bhabana"
              />
              <h4 className="text-lg font-medium">Bhabana Dangi</h4>
            </div>
            <div
              onClick={() => handleProfileClick("manikala-gurung")}
              className="cursor-pointer text-center"
            >
              <img
                src={E}
                className="w-full max-w-[180px] rounded-[20px] mb-4 mx-auto"
                alt="Manikala"
              />
              <h4 className="text-lg font-medium">Manikala Gurung</h4>
            </div>
            <div
              onClick={() => handleProfileClick("sneha-shrestha")}
              className="cursor-pointer text-center"
            >
              <img
                src={F}
                className="w-full max-w-[180px] rounded-[20px] mb-4 mx-auto"
                alt="Sneha"
              />
              <h4 className="text-lg font-medium">Sneha Shrestha</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
