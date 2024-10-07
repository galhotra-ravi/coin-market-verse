import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";

function CoinCard({
  image = "",
  id = "",
  symbol = "",
  price = 0,
  marketCap = 0,
  index = 0,
  priceChange24h = 0,
}) {
  return (
    <>
      <div className="h-40 w-[30%] min-w-40 rounded-2xl bg-secondary-color shadow-md shadow-black flex flex-col justify-between hover:bg-third-color hover:cursor-pointer transition-all ease-in-out duration-300">
          <Link to={`/coins/${id}`}>
        <div>
            {/* coin image, symbol, rank */}
            <div className="flex justify-between">
              <LazyLoadImage
                src={image}
                effect="opacity"
                className="w-[35px] max-h-[35px] rounded-xl mt-3 ml-3"
              />

              <i className="mt-3">#{index + 1}</i>

              <div className="mt-3 mr-3">
                <h4 className="  "> {symbol.toUpperCase()}</h4>
              </div>
            </div>

            {/* coin price and 24h change */}
            <div className="my-1">
              <h2 className="font-bold text-xl text-center">${price} </h2>
              <p
                className={`text-center text-sm font-medium ${
                  priceChange24h > 0 ? "text-green-700" : "text-red-700"
                } `}
              >
                {priceChange24h > 0 ? "+" : ""}
                {priceChange24h} %
              </p>
            </div>

            {/* coin market cap */}
            <div className="flex flex-col items-center mb-3">
              <p className="font-thin text-sm">Market Cap</p>
              <h2>${marketCap}</h2>
            </div>
        </div>
          </Link>
      </div>
    </>
  );
}

export default CoinCard;
