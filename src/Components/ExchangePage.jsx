import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NumbersDiv from "./Cards/NumbersDiv";
import LinkCard from "./Cards/LinkCard";

function ExchangePage() {
  const { exchangeID } = useParams();
  const [exchangeData, setExchangeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const notifyNotFound = () =>
    toast.error("Coin not found", { toastId: "not-found" });
  const notifyTryAgain = () =>
    toast.error("Please try again after 30 seconds!", { toastId: "try-again" });

  const fetchCoinData = () => {
    setIsLoading(true);
    fetch(`https://api.coingecko.com/api/v3/exchanges/${exchangeID}`)
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
        console.log(data);
        setExchangeData(data);
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchCoinData();
  }, [exchangeID]);

  const formatCommas = (number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const image = exchangeData.image?.replace("small", "large");
  const name = exchangeData.name;
  const volumeTrade24hInBtc = formatCommas(exchangeData.trade_volume_24h_btc);
  const country = exchangeData.country;
  const since = exchangeData.year_established;
  const website = exchangeData.url;
  const facebookUrl = exchangeData.facebook_url;
  const telegramUrl = exchangeData.telegram_url
  const twitterUsername = exchangeData.twitter_handle;
  const redditUrl = exchangeData.reddit_url
  const description = exchangeData.description

  const hasAnyLink = facebookUrl || telegramUrl || redditUrl || twitterUsername;

  return (
    <div className="w-full min-h-screen  h-fit flex py-10 p-5 justify-center items-center text-white">
      {isLoading ? (
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-4 h-4 rounded-full bg-[#5a38fd] animate-bounce [animation-delay:0.4s]"></div>
        </div>
      ) : (
        <div className="h-fit w-3/4 min-w-96 max-[450px]:min-w-fit p-5 rounded-lg bg-secondary-color flex flex-col gap-5">
          <div className="flex gap-5 max-md:gap-2 items-center justify-center max-[840px]:justify-start">
            <img src={image} className="w-[50px] max-md:w-[35px] max-md:gap-2 rounded-xl" alt={name} />
            <h2 className="text-4xl font-bold max-md:text-2xl">{name}</h2>
          </div>
          <div className="flex flex-col max-[450px]:gap-4">
            <NumbersDiv title="Establishment Year" value={since} />
            <NumbersDiv title="Country of Origin" value={country || "N/A"} />
            <NumbersDiv
              title="Trading Volume in 24h"
              value={volumeTrade24hInBtc}
              coinSymbol="BTC"
              includeCoinSymbol={true}
            />
          </div>

          <div className="flex gap-20 max-[840px]:flex-col max-[840px]:gap-5   ">
            <div className="links flex flex-col gap-2 ">
              <h2 className="text-lg font-bold text-[#9ca3af]">Links</h2>
              <div className="flex gap-2 flex-wrap">
                <p
                  className={`text-base max-[450px]:max-w-[300px] text-justify ${
                    website == "N/A" || "" ? "hidden" : ""
                  }`}
                >
                  <LinkCard
                    linkTitle={"Website"}
                    linkIconName={"globe"}
                    linkUrl={website}
                  />
                </p>
              </div>
            </div>

            <div className={`links flex flex-col gap-2 items-start ${!hasAnyLink ? 'hidden' : ''}`}>
              <h2 className="text-lg font-bold text-[#9ca3af]">Socials</h2>
              <div className="flex gap-2 flex-wrap ">
                <p
                  className={`text-base max-[450px]:max-w-[300px] text-justify ${
                    facebookUrl == "" ? "hidden" : ""
                  }`}
                >
                  <LinkCard
                    linkTitle={"Facebook"}
                    linkIconName={"facebook"}
                    linkUrl={facebookUrl}
                    iconType={"brands"}
                  />
                </p>
                <p
                  className={`text-base max-[450px]:max-w-[300px] text-justify ${
                    (telegramUrl ==  "") ? "hidden" : ""
                  }`}
                >
                  <LinkCard
                    linkTitle={"Telegram"}
                    linkIconName={"telegram"}
                    linkUrl={telegramUrl}
                    iconType={"brands"}
                  />
                </p>
                <p
                  className={`text-base max-[450px]:max-w-[300px] text-justify ${
                    redditUrl ==  "" ? "hidden" : ""
                  }`}
                >
                  <LinkCard
                    linkTitle={"Reddit"}
                    linkIconName={"reddit"}
                    linkUrl={redditUrl}
                    iconType={"brands"}
                  />
                </p>
                <p
                  className={`text-base max-[450px]:max-w-[300px] text-justify ${
                    twitterUsername ==  "" ? "hidden" : ""
                  }`}
                >
                  <LinkCard
                    linkTitle={"Twitter"}
                    linkIconName={"x-twitter"}
                    linkUrl={`https://x.com/${twitterUsername}`}
                    iconType={"brands"}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="description flex flex-col gap-2 ">
            <h2 className="text-lg font-bold text-[#9ca3af]">Description</h2>
            <p className="text-base max-[450px]:max-w-[300px] text-justify">
              {description || 'N/A'}
            </p>
          </div>
        </div>
      )}
      <ToastContainer 
      />
    </div>
  );
}

export default ExchangePage;
