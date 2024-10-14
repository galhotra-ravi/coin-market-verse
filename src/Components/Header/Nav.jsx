import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav className="w-full h-20 border-b-[1px] border-b-secondary-color flex items-center justify-around">
      <Link to={""}>
        <h1 className="text-[#5a38fd] text-2xl font-bold">Coin  <span className="text-white">Market Verse</span></h1>
      </Link>
      <ul className="flex gap-8 text-white font-medium max-md:hidden">
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/coins"}>Coins</Link>
        </li>
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/exchanges"}>Exchanges</Link>
        </li>
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>

      {/* <div className="flex gap-5"> */}
        {/* <div className="w-72 h-10 bg-third-color rounded-md flex justify-evenly items-center px-3 max-lg:hidden">
          <i className="fa-solid fa-magnifying-glass text-[#9ca3af] text-xs"></i>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-64 h-10 bg-third-color rounded-md px-2 text-white outline-none"
          />
        </div> */}
        {/* <div className="h-10 w-10 rounded-md  flex justify-center items-center bg-third-color hover:bg-secondary-color hover:cursor-pointer transition-all ease-in-out duration-150 lg:hidden">
          <i className="fa-solid fa-magnifying-glass  text-[#9ca3af]"></i>
        </div> */}
        <div id="menuButton" className="h-10 w-10 rounded-md  flex justify-center items-center bg-third-color hover:bg-secondary-color hover:cursor-pointer transition-all ease-in-out duration-150 md:hidden" onClick={openMenu}>
          <i className="fa-solid fa-bars  text-[#9ca3af]"></i>
        </div>
      {/* </div> */}
      
    </nav>
    {isMenuOpen && (
    <ul 
    className={`h-fit py-14 flex flex-col items-center justify-center gap-5 text-2xl text-white select-none sm:hidden menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/coins"} onClick={handleLinkClick}>Coins</Link>
        </li>
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/exchanges"} onClick={handleLinkClick}>Exchanges</Link>
        </li>
        <li className="hover:scale-110 hover:text-[#5a38fd] transition-all ease-in-out duration-50">
          <Link to={"/about"} onClick={handleLinkClick}>About</Link>
        </li>
      </ul>
)}
      </>
  );
}

export default Nav;
