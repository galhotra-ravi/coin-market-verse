import React, { useEffect } from "react";
import notFoundAnimation from "../assets/404-animation.gif";
import { Link } from "react-router-dom";

function NotFound() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="w-full h-[calc(100vh_-_170px)] flex flex-col justify-center items-center gap-5">
      <img src={notFoundAnimation} className="w-80 sm:w-96" alt=""/>

      <Link to={""}>
        <button className="w-fit bg-white py-2 px-5 rounded-md text-xl font-medium outline-1 hover:bg-main-color hover:outline hover:outline-white hover:text-white transition-all ease-in-out duration-300 ">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
