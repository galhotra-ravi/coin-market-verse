import React from "react";
import heroImage from "../../assets/hero-image.svg";
import { Link } from 'react-router-dom';
import TradingViewTicker from "../TradingViewTicker";

function Home() {
  return (
    <>
    <TradingViewTicker />
    <div className="w-full h-[calc(100vh_-_150px)] flex justify-center items-center gap-48 max-[1130px]:flex-col-reverse max-[1130px]:h-fit max-[1130px]:gap-24 max-[1130px]:py-20">
      <img src={heroImage} width={500} alt="" className="max-[1130px]:w-[300px]" />
      <div className="w-fit h-fir  flex flex-col gap-10 max-sm:gap-5">
        <h1 className="w-[405px] text-white text-5xl font-medium max-sm:text-3xl max-[1130px]:text-center max-sm:w-[300px]">
          Master the Market with Real-Time{" "}
          <span className="font-bold">
            <i>Crypto Info</i>
          </span>
        </h1>
        <Link to={"/coins"} className="max-[1130px]:text-center"><button className="w-fit bg-white py-2 px-5 rounded-md text-xl font-medium outline-1 hover:bg-main-color hover:outline hover:outline-white hover:text-white transition-all ease-in-out duration-300 ">
          Explore
        </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;
