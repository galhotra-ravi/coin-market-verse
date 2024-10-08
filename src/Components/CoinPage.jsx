import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CoinPageCard from "./Cards/CoinPageCard";

function CoinPage() {
  const { coinID } = useParams();
  const [coinData, setcoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const notifyNotFound = () =>
    toast.error("Coin not found", { toastId: "not-found" });
  const notifyTryAgain = () =>
    toast.error("Please try again after 30 seconds!", { toastId: "try-again" });

  const fetchCoinData = () => {
    setIsLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`)
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 404) {
          notifyNotFound();
          throw new Error("Coin not found");
        } else if (response.status === 429) {
          notifyTryAgain();
          throw new Error("Rate limit exceeded");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setcoinData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setIsLoading(false);
        if (
          !err.message.includes("Coin not found") &&
          !err.message.includes("Rate limit exceeded")
        ) {
          notifyTryAgain();
        }
      });
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinID]);

  return (
    <>
      <div className="w-full min-h-[calc(100vh_-_170px)] h-fit p-10">
        {isLoading ? (
          <div className="flex flex-row gap-2 mt-[200px] justify-center">
            <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:.7s]"></div>
          </div>
        ) : (
          <div className="h-fit w-full flex items-center justify-center  text-xl text-white ">
            {<CoinPageCard 
            coinId = {coinID}
              name= {coinData.name}
              image = {coinData.image.small}
              symbol = {coinData.symbol} 
              priceChange24h = {coinData.market_data.price_change_percentage_24h}
              currentPrice = {coinData.market_data.current_price.usd}
              marketCap = {coinData.market_data.market_cap.usd}
              marketCapChange24h = {coinData.market_data.market_cap_change_percentage_24h}
              volume24h={coinData.market_data.total_volume.usd}
              circulatingSupply={coinData.market_data.circulating_supply}
              totalSupply={coinData.market_data.total_supply}
              maxSupply={coinData.market_data.max_supply}
              />|| (
              <span className="mt-[200px]">No data found</span>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default CoinPage;
