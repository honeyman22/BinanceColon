import Image from 'next/image'
import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {RiCoinsLine} from "react-icons/ri"
import {AiFillIdcard} from "react-icons/ai"
const BulidSection = () => {
  return (
    <div className='w-full px-20 flex py-5  justify-center  items-center'>
        <div className="text-[40px] w-[50%]  flex flex-col justify-start items-start font-serif">
            <div className="">Build your crypto portfolio</div>
            <div className="text-[20px] text-black/60">Start your first trade with these easy steps.</div>
         
            <div className="w-full h-[500px] justify-evenly items-center flex flex-col">
                <div className="h-[120px] w-[90%] flex items-center justify-between">
                    <div className="w-[100px] flex justify-center items-center h-[100px] ">
                       <FaUserAlt size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif"> Find your Account</span>
                        <span className="text-[18px] font-serif">Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.
                        </span>
                    </div>
                </div>
                <div className="h-[120px] w-[90%] flex items-center justify-between  ">
                    <div className="w-[100px] flex justify-center items-center h-[100px]">
                        <AiFillIdcard size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif"> Verify your identity</span>
                        <span className="text-[18px] font-serif">Complete the identity verification process to secure your account and transactions.
                        </span>
                    </div>
                </div>
                <div className="h-[120px] w-[90%] flex items-center justify-between  ">
                    <div className="w-[100px] flex justify-center items-center h-[100px] ">
                        <RiCoinsLine size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif">Start trading</span>
                        <span className="text-[18px] font-serif">You re good to go! Buy/sell crypto set up recurring buys for your investments &lsquo and discover what Binance has to offer.
                        </span>
                    </div>
                </div>
                <div className="h-[40px] w-full mt-10 flex items-start ">
                    <button className="text-[20px] font-[500]  bg-yellow-300 rounded-lg px-8 py-2 ">Get Started</button>
                </div>
            </div>
            
        </div>
        
         <div className="w-[48%] h-full flex justify-center items-center">
                <div className="h-[100vh] w-[500px] relative">
                    <Image src={require("../public/image/Bulid.png")} alt="home page" layout='fill' objectFit='contain'/>
                </div>
            </div>
    </div>
  )
}

export default BulidSection