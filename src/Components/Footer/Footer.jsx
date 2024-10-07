import React from "react";
import cgLogo from "../../assets/ColorWhite.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="text-white bg-secondary-color  w-full py-4 flex items-center justify-between  max-[800px]:flex-col max-[800px]:gap-10 ">
      <div className="ml-24 flex flex-col max-[800px]:justify-center max-[800px]:m-0">
        <h2 className="text-2xl font-bold max-[800px]:text-center">Coin Market Verse</h2>
        <p className="max-[800px]:text-center">&copy; All rights reserved</p>
      </div>
      <div className="">
        <p className="text-center">Made by</p>
        <Link to={'https://github.com/galhotra-ravi'} target="_blank">
        <h2 className="font-medium hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-150 ">
          <i class="fa-brands fa-github "></i> Ravi Kumar
        </h2>
        </Link>
      </div>
      <div className="flex flex-col items-end mr-24 max-[800px]:m-0">
        <p className="max-[800px]:text-center ">Crypto Data Provided by</p>
        <Link to={'https://www.coingecko.com/'} target="_blank" className="max-[800px]:self-center"><img src={cgLogo} alt="" className="h-7" /></Link>
      </div>
    </div>
  );
}

export default Footer;
