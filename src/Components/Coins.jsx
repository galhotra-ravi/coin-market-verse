import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CoinCard from "./Cards/CoinCard";

function Coins() {
  const notifyError = () => {
    toast.error("Please Try again after 30 seconds!");
  };
  const [coinsData, setCoinsData] = useState([]);

  const fetchCoinsData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setCoinsData(data);
      })
      .catch((err) => {
        notifyError();
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    fetchCoinsData();
  }, []);

  return (
    <>
      <div className="h-fit w-full mb-16 text-white">
        <h2 className="text-center my-10 font-bold text-3xl">Top 100 Coins</h2>
        <div className=" h-fit min-h-screen w-full flex flex-wrap gap-5 items-center  justify-center">
          {coinsData.length > 0 ? ( // Only map if data is available
            coinsData.map((coin, index) => (
              <CoinCard
                key={coin.id}
                image={coin.image}
                name={coin.name}
                id={coin.id}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                index={index}
                priceChange24h={coin.price_change_percentage_24h}
              /> // Pass the image as a prop
            ))
          ) : (
            /* From Uiverse.io by carlosepcc */
            /* From Uiverse.io by Javierrocadev */
            <div class="flex flex-row gap-2 mt-[-250px]">
              <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
              <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
            </div> // Optional loading state
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Coins;
