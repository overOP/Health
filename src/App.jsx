import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './Routes'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App