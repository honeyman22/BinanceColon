import Image from "next/image";
import React from "react";
import {
  BsFillGrid3X3GapFill,
  BsBank,
  BsArrowRight,
  BsCardImage,
  BsPiggyBank,
  BsCalculator,
  BsSdCard,
  BsPercent,
  BsPersonDash,
  BsFillPeopleFill,
  BsCreditCard,
  BsCreditCard2Back,
  BsWallet,
} from "react-icons/bs";
import { useRouter } from "next/router";
const Naivation = () => {
  const history = useRouter();
  return (
    <div>
      <div className="h-[70px] w-full bg-white shadow-sm flex justify-between pr-5 items-center ">
        <div className="px-5 flex ">
          <div
            onClick={() => history.push("/")}
            className="h-[30] w-[120px] cursor-pointer  text-[14px] text-black/70 relative"
          >
            <Image
              src={require("../public/image/binancelogo.png")}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex cursor-pointer justify-center w-[50px] items-center">
            <BsFillGrid3X3GapFill size={15} />
          </div>
          <div className="p-3 cursor-pointer h-[70px] flex items-center relative group  hover:text-yellow-500 font-serif font-light">
            Buy Crypto
            <div className="group-hover:flex hidden flex-col top-[70px] absolute bg-white p-3 shadow-md z-10 w-[350px] h-auto">
              <div className="flex mb-3 justify-between">
                <div className="text-[16px] text-black font-serif">
                  Pay with
                </div>
              </div>

              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsBank fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Bank Deposite</div>
                  <div className="text-[12px] text-black/60">
                    Deposite EUR via SEPA or card
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsCreditCard fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">
                    Credit/Debit Card
                  </div>
                  <div className="text-[12px] text-black/60">
                    Buy Crypto via Card
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsWallet fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Cash Balnace</div>
                  <div className="text-[12px] text-black/60">
                    Buy Crypto with your EUR balance
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsBank fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Bank Transfer</div>
                  <div className="text-[12px] text-black/60">
                    Buy BUSD via SEPA
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsFillPeopleFill fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">P2P trading</div>
                  <div className="text-[12px] text-black/60">
                    Bank transfer and !00+ options
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => history.push("/market")}
            className="p-3 cursor-pointer h-[70px] items-center flex hover:text-yellow-500 font-serif font-light"
          >
            Markets
          </div>
          <div className="p-3 cursor-pointer h-[70px] flex items-center relative group  hover:text-yellow-500 font-serif font-light">
            Trade
            <div className="group-hover:flex hidden flex-col top-[70px] absolute bg-white p-3 shadow-md z-10 w-[350px] h-auto">
              <div className="flex mb-3 justify-between">
                <div className="text-[16px] text-black font-serif">
                  Pay with
                </div>
              </div>

              <div
                onClick={() => history.push("/trade/converter")}
                className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  "
              >
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsCalculator fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">
                    Binance Converter
                  </div>
                  <div className="text-[12px] text-black/60">
                    The Easiest way to Trade
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsSdCard fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Spot</div>
                  <div className="text-[12px] text-black/60">
                    Trade crypto with advance tools
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsPercent fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Margin</div>
                  <div className="text-[12px] text-black/60">
                    Increase your Profile with leverage
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsPersonDash fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">P2P</div>
                  <div className="text-[12px] text-black/60">
                    Bank transfer and 100+ options
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsPersonDash fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">
                    Startegy Tracking
                  </div>
                  <div className="text-[12px] text-black/60">
                    Traking made easy , track like a pro.
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsPersonDash fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Swap Farming</div>
                  <div className="text-[12px] text-black/60">
                    Swap to earn BNB
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
              <div className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                  <BsPersonDash fill="yellow" size={25} />
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Fan Token</div>
                  <div className="text-[12px] text-black/60">
                    Upgrade your fan experiences
                  </div>
                </div>
                <div className="peer-hover:flex hidden items-center">
                  <BsArrowRight fill="orange" size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 cursor-pointer h-[70px] items-center flex hover:text-yellow-500 font-serif font-light">
            Derivatives
          </div>
          <div className="p-3 cursor-pointer h-[70px] items-center flex hover:text-yellow-500 font-serif font-light">
            Earn
          </div>
          <div className="p-3 cursor-pointer h-[70px] items-center flex hover:text-yellow-500 font-serif font-light">
            Finance
          </div>
          <div className="p-3 cursor-pointer h-[70px] items-center flex hover:text-yellow-500 font-serif font-light">
            NTF
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">
            Log In
          </div>
          <button
            onClick={() => history.push("/register")}
            className="px-3 rounded-md h-[30px] font-serif font-light bg-yellow-400"
          >
            Register
          </button>
          <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">
            Downloads
          </div>
          <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">
            English
          </div>
          <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">
            USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naivation;
