import React from "react";

import logo from "../assets/logo-Photoroom.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t w-full lg:h-[343px] border-[1px]">
        <div className="hidden md:flex max-w-7xl mx-auto px-4 py-10 justify-between">
          <div className="w-1/4">
            <div className="mb-4">
              <img src={logo} alt="Logo" className="h-10 border-[1px]" />
            </div>
            <p className="text-gray-600 text-sm">
              Supporting mental health
              <br />
              awareness and wellbeing
              <br />
              through accessible
              <br />
              resources.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Resources</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Articles</a>
              </li>
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Videos</a>
              </li>
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Self-help Guides</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Support</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Helpline</a>
              </li>
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Find a Therapist</a>
              </li>
              <li className="hover:underline hover:text-blue-600">
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Connect</h3>
            <div className="flex space-x-4 text-xl text-black">
              <a className=" hover:text-blue-600" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className=" hover:text-red-600" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className=" hover:text-blue-600" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className=" hover:text-red-600" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-black mr-16 ml-16 hidden lg:flex" />
        <div className=" p-4 text-center hidden lg:flex lg:justify-center">
          <p>
            &copy;{" "}
            {
              new Date().getFullYear() // Get the current year
            }{" "}
            WebsiteName. All rights reserved
          </p>
        </div>

        <div className="md:hidden flex flex-col items-center py-6">
          <div className="flex justify-center space-x-8 text-2xl text-black mb-4">
            <a className=" hover:text-blue-600" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className=" hover:text-blue-600" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className=" hover:text-red-600" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="flex justify-center items-center text-sm text-black space-x-2">
            <i className="far fa-copyright"></i>
            <span>{new Date().getFullYear()}</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
