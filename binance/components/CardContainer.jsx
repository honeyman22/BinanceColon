import Image from "next/image";
import React from "react";

const CardContainer = () => {
  return (
    <div className="w-full px-20 flex mt-10   justify-center  items-center">
      <div className="text-[40px] w-full  flex flex-col justify-start items-start font-serif">
        <div className="">Explore endless possibilities with Binance</div>
        <div className="py-5 w-full h-[100vh] flex gap-4 items-center">
          <div className="group h-[550px] bg-slate-100 rounded-lg hover:scale-[1.03] hover:shadow-lg w-[32%] p-8 flex flex-col justify-between items-center">
            <div className="h-[250px] w-full relative bg-salte-400">
              <Image
                src={require("../public/image/first.png")}
                alt="Nfts"
                layout="fill"
                objectFit="contains"
              />
            </div>
            <div className="h-auto mb-2 w-full">
              <div className="text-[28px] font-semibold font-serif">
                Dive into the world of NFTs
              </div>
              <div className="text-[18px]  font-serif font-medium text-black/50">
                Explore endless possibilities with Binance Explore endless
                possibilities with Binance
              </div>
              <div className="group-hover:block hidden">
                <div className="text-[16px] font-light font-serif text-orange-400">
                  Learn More ...
                </div>
              </div>
            </div>
          </div>
          <div className="group h-[550px] bg-slate-100  hover:scale-[1.03] rounded-lg hover:shadow-lg w-[32%] p-8 flex flex-col justify-between items-center">
            <div className="h-auto mb-2 w-full">
              <div className="text-[28px] font-semibold font-serif">
                Grow your Business with Binance Pay
              </div>
              <div className="text-[18px]  font-serif font-medium text-black/50">
                Explore endless possibilities with Binance Explore endless
                possibilities with BinanceExplore endless possibilities with
                Binance Explore endless possibilities with Binance
              </div>
              <div className="group-hover:block hidden">
                <div className="text-[16px] font-light font-serif text-orange-400">
                  Learn More ..
                </div>
              </div>
            </div>
            <div className="h-[250px] w-full relative bg-salte-400">
              <Image
                src={require("../public/image/binance1.png")}
                alt="Nfts"
                layout="fill"
                objectFit="contains"
              />
            </div>
          </div>
          <div className="h-[550px] bg-slate-100 group hover:scale-[1.03] rounded-lg hover:shadow-lg w-[32%] p-8 flex flex-col justify-between items-center">
            <div className="h-[250px] w-full relative bg-salte-400">
              <Image
                src={require("../public/image/binance2.png")}
                alt="Nfts"
                layout="fill"
                objectFit="contains"
              />
            </div>
            <div className="h-auto mb-2 w-full">
              <div className="text-[28px] font-semibold font-serif">
                Dive into the world of NFTs
              </div>
              <div className="text-[18px]  font-serif font-medium text-black/50">
                Explore endless possibilities with Binance Explore
              </div>
              <div className="group-hover:block hidden">
                <div className="text-[16px] font-light font-serif text-orange-400">
                  Learn More ..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
