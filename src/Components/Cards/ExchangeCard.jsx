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
        <Link to={`/exchanges/${id}`} className="h-full">
          <div className="h-full flex justify-around items-center">
            <div className="flex justify-center items-center w-1/2">
              <LazyLoadImage
                src={image}
                effect="opacity"
                className="w-[75px]  rounded-xl"
              />
            </div>

            <div className="w-1/2">
              <h2 className="font-bold text-xl">{name} </h2>
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
