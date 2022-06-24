import React from "react";

const HeadSection = () => {
  return (
    <div>
      <div className="w-full bg-blue-100 flex items-center justify-center">
        <div className="flex flex-col items-start justify-center w-[90%] h-[150px]">
          <div className="text-[32px] font-serif">Binance Blog</div>
          <div className="text-[16px] font-serif text-black/60">
            Stay up to date with the latest stories and commentary brought to
            you by Binance, the worlds leading blockchain and crypto ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
