import Image from 'next/image'
import React from 'react'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
const Naivation = () => {
  return (
    <div>
        <div className="h-[70px] w-full bg-white shadow-sm flex justify-between pr-5 items-center ">
          <div className="px-5 flex ">
            <div className="h-[30] w-[120px] cursor-pointer  text-[14px] text-black/70 relative">
              <Image src={require("../public/image/binancelogo.png")} alt="logo" layout='fill' objectFit='contain'/>
            </div>
            
            <div className="flex cursor-pointer justify-center w-[50px] items-center"><BsFillGrid3X3GapFill size={15}/></div>
            <div className="p-3 cursor-pointer relative group  hover:text-yellow-500 font-serif font-light">Buy Crypto</div>
             <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Markets</div>
              <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Trade</div>
               <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Derivatives</div>
                <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Earn</div>
                 <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Finance</div>
                  <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">NTF</div>
          </div>
          <div className="flex items-center">
             <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Log In</div>
             <button className="px-3 rounded-md h-[30px] font-serif font-light bg-yellow-400">Register</button>
              <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">Downloads</div>
               <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">English</div>
                <div className="p-3 cursor-pointer hover:text-yellow-500 font-serif font-light">USD</div>
          </div>
        </div>
    </div>
  )
}

export default Naivation