import Image from "next/image";
import React from "react";
import {useRouter} from "next/router"
const Nav = () => {
    const history= useRouter()
  return (
    <div>
      <div className="h-[70px] w-full bg-white shadow-sm flex justify-between pr-5 items-center ">
        <div className="px-5 flex items-center ">
          <div
            onClick={() => history.push("/")}
            className="h-[50px] w-[120px] cursor-pointer  text-[14px] text-black/70 relative"
          >
            <Image
              src={require("../../public/image/binancelogo.png")}
              alt="logo home"
              layout="fill"
              objectFit="contain"
            />
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

export default Nav;
