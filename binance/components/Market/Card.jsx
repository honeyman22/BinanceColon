import { ListItemSecondaryAction } from "@mui/material";
import Image from "next/image";
import React from "react";
import useCoinsReducers from "../../hooks/useCoinsReducers";
import {RiPieChart2Fill} from "react-icons/ri"
import { yellow } from "@mui/material/colors";
const MarketCard = () => {
  const coins = useCoinsReducers();
  console.log(coins)
  return (
    <div>
      <div className="w-full h-auto lg:h-[300px] flex flex-col items-center justify-center p-5">
        <div className="w-[90%] font-serif text-[28px] my-4 flex justify-between items-center">
          <div className=""> Markets</div>
          <div className="flex items-center gap-2">
            <RiPieChart2Fill fill="yellow" size={20}/>
            <div className="text-[15px] ">Markets Overview</div>
          </div>
        </div>
        <div className="w-[90%] justify-between flex items-center">
          <div className="w-[24%] h-[180px] p-3 hover:shadow-md bg-white flex flex-col ">
            <div className="text-[14px] font-sans font-medium mb-3 text-black/50">
              Highlight Coin
            </div>
            {coins?.slice(0, 3)?.map((item) => (
              <div key={item.price} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src={item?.iconUrl}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-2">{item.symbol}</div>
                </div>
                <div className="">${parseFloat(item.price).toFixed(2)}</div>
                <div className="">{item.change}</div>
              </div>
            ))}
          </div>
          <div className="w-[24%] h-[180px] p-3 hover:shadow-md bg-white flex flex-col ">
            <div className="text-[14px] font-sans font-medium mb-3 text-black/50">
              Highlight Coin
            </div>
            {coins?.slice(10, 13)?.map((item) => (
              <div key={item.price} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src={item?.iconUrl}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-2">{item.symbol}</div>
                </div>
                <div className="">${parseFloat(item.price).toFixed(2)}</div>
                <div className="">{item.change}</div>
              </div>
            ))}
          </div>
    <div className="w-[24%] h-[180px] p-3 hover:shadow-md bg-white flex flex-col ">
            <div className="text-[14px] font-sans font-medium mb-3 text-black/50">
              Highlight Coin
            </div>
            {coins?.slice(24, 27)?.map((item) => (
              <div key={item.price} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src={item?.iconUrl}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-2">{item.symbol}</div>
                </div>
                <div className="">${parseFloat(item.price).toFixed(2)}</div>
                <div className="">{item.change}</div>
              </div>
            ))}
          </div>
        <div className="w-[24%] h-[180px] p-3 hover:shadow-md bg-white flex flex-col ">
            <div className="text-[14px] font-sans font-medium mb-3 text-black/50">
              Highlight Coin
            </div>
            {coins?.slice(0, 3)?.map((item) => (
              <div key={item.price} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src={item?.iconUrl}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-2">{item.symbol}</div>
                </div>
                <div className="">${parseFloat(item.price).toFixed(2)}</div>
                <div className="">{item.change}</div>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
