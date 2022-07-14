import Image from "next/image";
import React from "react";
import { useState } from "react";
import { RiArrowUpDownLine, RiNewspaperFill } from "react-icons/ri";
import useCoinsReducers from "../../hooks/useCoinsReducers";
const Converter = () => {
  const [price1, setPrice1] = useState(Number);
  const [price2, setPrice2] = useState(Number);
  const [total, setTotal] = useState(Number);

  const coins = useCoinsReducers();
  console.log(price2);
  const handleClick = () => {
    setTotal(price1 / price2);
  };
  return (
    <div>
      <div className=" flex justify-start items-center flex-col w-full">
        <div className="w-[90%] bottom-2 border-black h-[100px] py-10 flex justify-between items-center ">
          <div className="w-350px flex h-[100px] items-center gap-5 ">
            <div className="px-5 py-3 bg-yellow-400 h-[40px] text-[18px] font-serif items-center flex justify-center rounded-full cursor-pointer  ">
              Market
            </div>
            <div className="h-[40px] text-[18px] px-5 py-3 font-serif items-center flex justify-center rounded-full cursor-pointer ">
              Limit
            </div>
          </div>
          <div className="h-[40px] bg-slate-100 text-[18px] gap-4 px-5 py-3 font-serif items-center flex justify-center rounded-md cursor-pointer ">
            <RiNewspaperFill size={24} />
            Order
          </div>
        </div>
        <div className="w-[90%] justify-center items-center flex flex-col ">
          <div className="w-[600px] h-[500px] flex flex-col  justify-center ">
            <div className="h-[80px] flex justify-center items-center my-10 text-black/90 text-[32px] font-serif bg-slate-100 w-full">
              {total}
            </div>
            <div className="h-[80px] w-full">
              <div className="flex justify-between items-center">
                <div className="text-[16px] font-serif text-black/90">
                  From:
                </div>
                <div className="text-[16px] font-serif text-black/70">
                  Available---USAD
                </div>
              </div>
              <div className="w-full h-[50px] flex items-center justify-between bg-slate-100 rounded-md">
                <input
                  type="number"
                  className="w-[65%] bg-transparent text-[16px] py-2 outline-none px-4"
                  placeholder="Enter the Number..."
                  value={price2}
                />
                <div className="w-[35%] h-[40px] text-[24px]   text-yellow-600 ">
                  <span className="font-serif font-[300] text-[20px] border-r-[2px] border-black/40 px-2">
                    MAX
                  </span>
                  <select
                    onChange={(e) => setPrice2(e.target.value)}
                    name=""
                    id=""
                    className="w-[120px] bg-transparent font-serif font-[300] text-[20px]  px-2 outline-none "
                  >
                    <option
                      value={null}
                      className="h-[40px]  w-[180px] bg-transparent flex items-center font-serif font-[300] text-[20px]  px-2 justify-around "
                    >
                      <span className="font-serif font-[300] text-black text-[20px]  px-2">
                        NONE
                      </span>
                    </option>
                    {coins.map((items) => (
                      <option
                        key={items.price}
                        value={items.price}
                        className="h-[40px]  w-[180px] bg-transparent flex items-center font-serif font-[300] text-[20px]  px-2 justify-around "
                      >
                        <div className="h-[30px] w-[30px] relative">
                          <Image
                            src={items.iconUrl}
                            alt="icons"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <span className="font-serif font-[300] text-black text-[20px]  px-2">
                          {items.symbol}
                        </span>
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="h-[40px] w-full mt-3 flex justify-center items-center">
              <div className="w-[40px] h-[40px] flex justify-center items-center font-serif font-light text-black/60 rounded-full bg-slate-100">
                <RiArrowUpDownLine size={30} />
              </div>
            </div>
            <div className="h-[90px] w-full ">
              <div className="flex justify-between items-center">
                <div className="text-[16px] font-serif text-black/90">To:</div>
              </div>
              <div className="w-full h-[50px] flex items-center justify-between bg-slate-100 rounded-md">
                <input
                  type="number"
                  className="w-[65%] bg-transparent text-[16px] py-2 outline-none px-4"
                  placeholder="Enter the Number..."
                  value={price1}
                />
                <div className="w-[35%] h-[40px] text-[24px]   text-yellow-600 ">
                  <select
                    onChange={(e) => setPrice1(e.target.value)}
                    name=""
                    id=""
                    className="w-[120px] ml-16 bg-transparent font-serif font-[300] text-[20px]  px-2 outline-none "
                  >
                    {coins.map((items) => (
                      <option
                        key={items.price}
                        value={items.price}
                        className="h-[40px]  w-[180px] bg-transparent flex items-center font-serif font-[300] text-[20px]  px-2 justify-around "
                      >
                        <div className="h-[30px] w-[30px] relative">
                          <Image
                            src={items.iconUrl}
                            alt="icons"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <span className="font-serif font-[300] text-black text-[20px]  px-2">
                          {items.symbol}
                        </span>
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                handleClick();
              }}
              className={` ${
                price1 === 0 && price2 === 0
                  ? "cursor-wait bg-slate-100 "
                  : "cursor-pointer bg-slate-300"
              } mt-10 text-[20px] rounded-md h-[50px] flex justify-center items-center  `}
            >
              Enter The Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
