import Image from 'next/image'
import React from 'react'
import {FcUnlock} from "react-icons/fc"
import {MdOutlineScreenSearchDesktop} from "react-icons/md"
import {FaLaptopCode} from "react-icons/fa"
const SectionA = () => {
  return (
    <div>
        <div className='w-full px-20 flex py-5 justify-center  items-center'>
        <div className="text-[40px] w-[100%]  flex flex-col justify-start items-start font-serif">
            <div className="">Your trusted crypto exchange</div>
            <div className="text-[20px] text-black/60">Here at Binance  we are committed to user protection with strict protocols and industry-leading technical measures.</div>
            <div className='w-full flex justify-between'>
            <div className="w-[48%] h-[600px] flex justify-evenly items-center flex-col ">
                <div className="h-[120px] w-[90%] flex items-center justify-between">
                    <div className="w-[100px] flex justify-center items-center h-[100px] ">
                        <FaLaptopCode size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif"> Secure Asset Fund for Users (SAFU)</span>
                        <span className="text-[18px] font-serif">Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.
                        </span>
                    </div>
                </div>
                <div className="h-[120px] w-[90%] flex items-center justify-between  ">
                    <div className="w-[100px] flex justify-center items-center h-[100px] ">
                        <MdOutlineScreenSearchDesktop size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif"> Personalised Access Control</span>
                        <span className="text-[18px] font-serif">Advanced access control allows you to restrict devices and addresses that can access your account  for greater ease of mind.

                        </span>
                    </div>
                </div>
                <div className="h-[120px] w-[90%] flex items-center justify-between  ">
                    <div className="w-[100px] flex justify-center items-center h-[100px] ">
                        <FcUnlock size={60}/>
                    </div>
                    <div className="flex flex-col w-[75%] justify-center">
                        <span className="text-[28px] font-serif">Advanced Data Encryption</span>
                        <span className="text-[18px] font-serif">
Advanced Data Encryption
Your transaction data is secured via end-to-end encryption ensuring that only you have access to your personal information.
                        </span>
                    </div>
                </div>
                
            </div>
            <div className="w-[48%] h-[500px] flex justify-center items-center">
                <div className="h-full w-[500px] relative">
                    <Image src={require("../public/image/sectionA.png")} alt="home page" layout='fill' objectFit='contain'/>
                </div>
            </div>
            </div>
        </div> 
    </div>
    </div>
  )
}

export default SectionA