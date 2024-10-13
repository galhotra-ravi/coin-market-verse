import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ExchangeCard from "./Cards/ExchangeCard";

function Exchanges() {
  const notifyError = () => {
    toast.error("Please Try again after 30 seconds!");
  };
  const [exchangesData, setExchangesData] = useState([]);

  const fetchExchangesData = () => {
    fetch("https://api.coingecko.com/api/v3/exchanges/")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setExchangesData(data);
      })
      .catch((err) => {
        notifyError();
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    fetchExchangesData();
  }, []);

  return (
    <>
      <div className="h-fit w-full mb-16 text-white">
        <h2 className="text-center my-10 font-bold text-3xl">Top 100 Exchanges</h2>
        <div className=" h-fit min-h-screen w-full flex flex-wrap gap-5 items-center  justify-center">
          {exchangesData.length > 0 ? ( // Only map if data is available
            exchangesData.map((exchange, index) => (
              <ExchangeCard
                key={exchange.id}
                id={exchange.id}
                image={exchange.image}
                name={exchange.name}
                since={exchange.year_established}
                rank={exchange.trust_score_rank}
                index={index}
                volumeTrade24hInBtc={exchange.trade_volume_24h_btc}
              /> 
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

export default Exchanges;
