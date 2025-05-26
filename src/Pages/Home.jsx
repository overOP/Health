import React from "react";
import { Link, useNavigate } from "react-router";
import Mind from "../assets/1.png";
import { HOME } from "../Data/Data";

const Home = () => {
  const navigate = useNavigate();

  const handleAi = () => {
    navigate("/ai");
  };

  const handleQuiz = () => {
    navigate("/quiz");
  };

  const handleReadmore = (id) => {
    console.log("Navigating to id:", id);
    navigate(`/readmore/${id}`);
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="flex flex-col lg:flex-row-reverse lg:gap-40 items-center justify-center w-full py-12 px-4 gap-6 bg-[#b2c5e5] md:flex-row md:py-16 md:px-8 lg:px-16 max-w-screen overflow-x-hidden"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <img
          src={Mind}
          className="w-full max-w-[312px] h-auto rounded-[30px] md:max-w-[400px] md:h-[370px] lg:max-w-[500px] lg:h-[370px]"
          alt="Empower Your Mind"
        />
        <div className="flex flex-col items-center md:items-start md:max-w-[50%]">
          <h2 className="text-2xl font-bold text-center md:text-left md:text-3xl lg:text-4xl">
            Empower Your Mind,
            <br />
            One Step at a Time
          </h2>
          <button
            onClick={() => navigate("/therapists")}
            className="bg-[#f6ca56] w-full max-w-[300px] h-[40px] rounded-[10px] mt-4 hover:bg-[#e5b945] transition-colors"
          >
            Find the therapist
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div
        className="flex flex-col items-center justify-center w-full py-12 px-4 gap-6 bg-[#bcccdc] lg:bg-white md:py-16 md:px-8 lg:px-16 max-w-screen overflow-x-hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <div className="flex flex-col items-center text-center max-w-[800px]">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Your journey to a brighter mind starts here.
          </h2>
          <h3 className="text-xl mt-4 md:text-2xl">
            Take our free mental health quiz and get matched with the right
            therapist for your needs.
          </h3>
        </div>
        <button
          onClick={handleQuiz}
          className="bg-[#f6ca56] w-full max-w-[300px] h-[40px] rounded-[10px] hover:bg-[#e5b945] transition-colors"
        >
          Take free quiz
        </button>
      </div>

      {/* Articles Section */}
      <div className="flex flex-col items-center w-full py-12 px-4 gap-8 bg-[#bcccdc] md:py-16 md:px-8 lg:px-16 max-w-screen overflow-x-hidden">
        <h4 className="text-xl font-bold md:text-2xl">Latest Articles</h4>

        <div
          className="grid grid-cols-1 gap-8 w-full max-w-[1200px] md:grid-cols-2 lg:grid-cols-3"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          {HOME.map((item) => (
            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
              className="flex flex-col bg-white rounded-[10px] p-4 hover:shadow-lg transition-shadow"
              data-aos="fade-up"
            >
              <div>
                <img
                  src={item.image}
                  className="w-full h-auto rounded-[8px]"
                  alt={item.title}
                />
                <h4 className="text-lg font-bold mt-4">{item.title}</h4>
                <p className="text-sm mt-2">{item.description}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadmore(item.id);
                  }}
                  className="text-sm mt-4 text-left text-blue-600 hover:underline"
                >
                  Read more →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Chatbot Section */}
      <div
        className="flex flex-col items-center w-full py-12 px-4 gap-6 bg-white md:flex-row md:justify-center md:py-16 md:px-8 lg:px-16 max-w-screen overflow-x-hidden"
        data-aos="fade-left"
      >
        <div className="flex flex-col items-center text-center max-w-[800px] md:text-center md:items-center">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            A chatbot with a listening ear for your feelings.
          </h2>
          <p className="text-lg mt-4 md:text-xl">
            Share your thoughts and let us help guide you through tough moments
            with empathy and support.
          </p>
          <button
            onClick={handleAi}
            className="bg-[#f6ca56] w-full max-w-[300px] h-[40px] rounded-[10px] mt-6 hover:bg-[#e5b945] transition-colors"
          >
            Start chatting
          </button>
        </div>
      </div>

      {/* Footer Space */}
      <div className="bg-[#bcccdc] h-20 w-full"></div>
    </div>
  );
};

export default Home;
