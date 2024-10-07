import {React, useRef, useEffect} from 'react'

function TradingViewTicker() {
    useEffect(() => {
        // Check if the script already exists
        if (!document.getElementById("tradingview-widget-script")) {
          const script = document.createElement("script");
          script.id = "tradingview-widget-script";
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
          script.async = true;
          script.innerHTML = JSON.stringify({
            symbols: [
              { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
              { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
              { description: "USDT", proName: "BITSTAMP:USDTUSD" },
              { description: "USDC", proName: "BITSTAMP:USDCUSD" },
              { description: "BNB", proName: "BINANCE:BNBUSD" },
              { description: "Solana", proName: "COINBASE:SOLUSD" },
              { description: "Dogecoin", proName: "COINBASE:DOGEUSD" },
              { description: "TON", proName: "CRYPTO:TONUSD" },
              { description: "TRON", proName: "TRADENATION:TRONUSD" },
              { description: "XRP", proName: "BITSTAMP:XRPUSD" }
            ],
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: "adaptive",
            colorTheme: "dark",
            locale: "en"
          });
          
          // Append script to the widget container
          document.getElementById("tradingview-widget-container").appendChild(script);
        }
        
        // Cleanup function to remove the script and widget if needed
        return () => {
          const widgetContainer = document.getElementById("tradingview-widget-container");
          if (widgetContainer) {
            widgetContainer.innerHTML = ""; // Clean up previous widget instance
          }
        };
      }, []);
    
      return (
        <div className="tradingview-widget-container" id="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
          </div>
        </div>
      );
}

export default TradingViewTicker