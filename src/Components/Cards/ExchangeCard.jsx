import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";

function ExchangeCard({
  id = "",
  image = "",
  name = "",
  since = 0,
  rank = 0,
  volumeTrade24hInBtc = 0,
}) {
  image = image.replace("small", "large");
  const trimDecimals = (number) => {
    return parseFloat(number.toFixed(2)); // Keeps 2 decimal places
  };

  volumeTrade24hInBtc = trimDecimals(volumeTrade24hInBtc);

  return (
    <>
      <div className="h-40 w-[30%] min-w-40 rounded-2xl bg-secondary-color shadow-md shadow-black flex flex-col justify-between hover:bg-third-color hover:cursor-pointer transition-all ease-in-out duration-300">
        <Link to={`/exchanges/${id}`} className="h-full w-full">
          <div className="relative h-full flex justify-around items-center max-[750px]:flex-col ">
            <div className="bg-[#5a38fd] absolute left-0 top-0 p-2 rounded-tl-2xl rounded-br-2xl text-sm italic">
              #{rank}
            </div>
            <div className="flex justify-center items-center w-1/2 max-[900px]:w-full">
              <LazyLoadImage
                src={image}
                effect="opacity"
                className="w-[75px] max-[900px]:w-[50px] rounded-xl"
              />
            </div>

            <div className="w-1/2 max-[900px]:w-full  max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center">
              <h2 className="w-3/4 max-[900px]:text-center max-[900px]:text-base font-bold text-xl  ">
                {name}{" "}
              </h2>
              <p className="font-thin text-sm">
                Since <span className="font-semibold">{since}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ExchangeCard;
