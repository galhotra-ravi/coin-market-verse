import React from "react";

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";
import NumbersDiv from "./NumbersDiv";

function CoinPageCard({
  name = "",
  image = "",
  currentPrice = 0,
  priceChange24h = 0,
  symbol = "",
  marketCap = 0,
  marketCapChange24h = 0,
  volume24h = 0,
  circulatingSupply = 0,
  totalSupply = 0,
  maxSupply = 0,
}) {
  const formatCommas = (number) => {
    return number.toLocaleString("en-US");
  };
  const trimDecimals = (number) => {
    return parseFloat(number.toFixed(2)); // Keeps 2 decimal places
  };

  symbol = symbol.toUpperCase()

  currentPrice = formatCommas(currentPrice);
  marketCap = formatCommas(marketCap);
  volume24h = formatCommas(volume24h);
  circulatingSupply = formatCommas(circulatingSupply);
  totalSupply = formatCommas(totalSupply);
  maxSupply = formatCommas(maxSupply);

  priceChange24h = trimDecimals(priceChange24h);
  marketCapChange24h = trimDecimals(marketCapChange24h);

  return (
    <>
      <div className="w-full h-fit py-10 flex gap-2 items-center ">
        <div className="coinData w-fit h-fit p-5 rounded-lg flex flex-col gap-5  bg-secondary-color">
          {/* image, name and symbol */}
          <div className=" flex gap-2 items-center">
            <img src={image} className="w-[35px] max-h-[35px] rounded-xl" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{symbol}</p>
          </div>

          {/* price, change % */}
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold">${currentPrice}</h2>
            <p
              className={`text-base font-semibold ${
                priceChange24h > 0 ? "text-green-700" : "text-red-700"
              }`}
            >
              {priceChange24h > 0 ? "+" : ""}
              {priceChange24h}% (24h)
            </p>
          </div>

          {/* market cap and supplies */}
          <div className="flex flex-col gap-2">
            <NumbersDiv
              title={"Market Cap"}
              value={marketCap}
              isChangeShown={true}
              change={marketCapChange24h}
              includeDollarSymbol={true}
            />
            <NumbersDiv
              title={"Volume (24h)"}
              value={volume24h}
              includeDollarSymbol={true}
            />
            <NumbersDiv
              title={"Circulating Supply"}
              value={circulatingSupply}
              coinSymbol={symbol}
              includeCoinSymbol={true}
            />
            <NumbersDiv title={"Total Supply"} value={totalSupply} coinSymbol={symbol} includeCoinSymbol={true} />
            <NumbersDiv title={"Max. Supply"} value={maxSupply}               coinSymbol={symbol} includeCoinSymbol={true} />
          </div>
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
