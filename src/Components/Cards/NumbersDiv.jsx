import React from "react";

function NumbersDiv({
  title = "",
  value = 0,
  change = 0,
  isChangeShown = false,
  coinSymbol = '',
  includeDollarSymbol = false,
  includeCoinSymbol = false,
  isValueInfinte = false,
}) {
  return (
    <>
      <div className="w-auto min-w-[350px] gap-5 flex items-center justify-between">
        <h6 className="text-sm font-semibold text-gray-400">{title}</h6>
        <div className="flex gap-2">
          {isChangeShown ? (
            <p
              className={`text-base font-semibold ${
                change > 0 ? "text-green-700" : "text-red-700"
              }`}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </p>
          ) : (
            ""
          )}
          <h5 className="text-base font-semibold">
            {includeDollarSymbol ? '$' : ''}
            {value}
            {includeCoinSymbol ? ` ${coinSymbol}` : ''}
            
            </h5>
        </div>
      </div>
    </>
  );
}

export default NumbersDiv;
