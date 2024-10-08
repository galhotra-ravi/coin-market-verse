import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function CoinPageCard({
  name = "",
  image = "",
  currentPrice = 0,
  priceChange24HR = 0,
  symbol = "",
}) {
  return (
    <>
      <div className="w-full h-fit py-10 flex gap-2 items-center ">
        <div className="coinData w-fit h-fit p-5 rounded-lg flex flex-col items-center bg-secondary-color">
          <div className=" flex gap-2 items-center">
            <img src={image} className="w-[35px] max-h-[35px] rounded-xl" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{symbol.toUpperCase()}</p>
          </div>
          <p>{priceChange24HR}</p>
        </div>

        {/* <div className="coinGraph w-fit h-fit p-5 rounded-lg bg-secondary-color">
          <div>Graph</div>
        </div> */}

        {/* <div className="coinSummary w-fit h-fit p-5 rounded-lg bg-secondary-color">
          <div>Summary</div>
        </div> */}
      </div>
    </>
  );
}

export default CoinPageCard;
