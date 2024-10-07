import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CoinPage() {
  const { coinID } = useParams();
  const [coinsData, setCoinsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCoinsData = () => {
    setIsLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`)
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 404) {
          toast.error("Coin not found!");
          throw new Error("Coin not found");
        } else if (response.status === 429) {
          toast.error("Please try again after 30 seconds!");
          throw new Error("Rate limit exceeded");
        }
        return response.json();
      })
      .then((data) => {
        setCoinsData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setIsLoading(false);
        if (!err.message.includes("Coin not found") && !err.message.includes("Rate limit exceeded")) {
          toast.error("Please try again after 30 seconds!");
        }
      });
  };

  useEffect(() => {
    fetchCoinsData();
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
            {coinsData.description?.en || <span className="mt-[200px]">No data found</span> }
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default CoinPage;