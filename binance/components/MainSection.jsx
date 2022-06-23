import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <div>
      <div className="w-full p-5 mt-[60px] flex flex-col  items-center">
        <div className="w-[90%] justify-between flex flex-row h-[100vh]">
          <div className="w-[40%]  flex flex-col justify-start mt-14 items-start p-5">
            <div className="text-[56px] leading-[65px] font-serif ">
              Buy, trade, and hold 600+ cryptocurrencies on Binance

            </div>
            <div className="flex justify-between w-full mt-8">
              <input type="text" placeholder="Email/Phone number"  className="outline-none w-[270px]  px-4 rounded-md text-[16px] h-[46px]" />
              <button className="px-8 py-2 bg-yellow-400 font-serif rounded-md ">Get Started</button>
            </div>
          </div>
          <div className="w-[60%] mt-20 h-[500px] relative">
            <Image
              src={require("../public/image/home1.png")}
              alt="home banner"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
