import Image from "next/image";
import React from "react";
import { BsFillGrid3X3GapFill,BsBank ,BsArrowRight} from "react-icons/bs";
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
              {
                Array(5).fill("_").map((_,i)=>(
                  <div key={i} className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                   <BsBank fill="yellow" size={25}/>
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Bank Deposite</div>
                  <div className="text-[12px] text-black/60">Deposite EUR via SEPA or card</div>
                  
                </div>
                <div className="peer-hover:flex hidden items-center">
                    <BsArrowRight fill="orange" size={25}/>
                  </div>
              </div>
                ))
              }
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
              {
                Array(5).fill("_").map((_,i)=>(
                  <div key={i} className="h-[60px] w-full  hover:bg-black/10 rounded-lg text-black  gap-3 px-3 flex items-center  ">
                <div className="flex items-center peer justify-center h-[50px] w-[50px]">
                   <BsBank fill="yellow" size={25}/>
                </div>
                <div className="flex flex-col peer w-[180px] h-full justify-center  items-start">
                  <div className="text-[20px] font-serif">Bank Deposite</div>
                  <div className="text-[12px] text-black/60">Deposite EUR via SEPA or card</div>
                  
                </div>
                <div className="peer-hover:flex hidden items-center">
                    <BsArrowRight fill="orange" size={25}/>
                  </div>
              </div>
                ))
              }
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
          <button onClick={()=>history.push("/register")} className="px-3 rounded-md h-[30px] font-serif font-light bg-yellow-400">
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
