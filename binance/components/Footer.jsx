import React from "react";
import { BsChatQuoteFill, BsFacebook, BsGithub, BsInstagram, BsMessenger, BsShare, BsTwitter, BsYoutube } from "react-icons/bs";
import {footerdata} from "../components/Market/footerdata"
const Footer = () => {
  const data =footerdata
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center  px-5">
        <div className="w-[90%] h-auto border-b-2 border-black/60 py-5   flex justify-between mt-10 ">
          <div className="flex  flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
              About us
            </div>
            {
              data.aboutus.map((item)=>(
                <div key={item} className="text-[16px] cursor-pointer hover:text-black text-black/60 font-serif"> {item} </div>
              ))
            }
          </div>
          <div className="flex flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
              Products
            </div>
             {
              data.products.map((item)=>(
                <div key={item} className="text-[16px] cursor-pointer hover:text-black text-black/60 font-serif"> {item} </div>
              ))
            }
          </div>
          <div className="flex flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
              services
            </div>
             {
              data.services.map((item)=>(
                <div key={item} className="text-[16px] cursor-pointer hover:text-black text-black/60 font-serif"> {item} </div>
              ))
            }
          </div>
          <div className="flex flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
             support
            </div>
            {
              data.support.map((item)=>(
                <div key={item} className="text-[16px] cursor-pointer hover:text-black text-black/60 font-serif"> {item} </div>
              ))
            }
          </div>
          <div className="flex flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
               learn
            </div>
            {
              data.learn.map((item)=>(
                <div key={item} className="text-[16px] cursor-pointer hover:text-black text-black/60 font-serif"> {item} </div>
              ))
            }
            
          </div>
            <div className="flex flex-col capitalize ">
            <div className="text-[18px] mb-1 font-serif font-normal">
              About us
            </div>
          <div className="w-[160px] gap-3 flex flex-wrap">
            <div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsChatQuoteFill size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsFacebook size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsTwitter size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsGithub size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsMessenger size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsShare size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsInstagram size={20}/>
            </div><div className="w-[35px] rounded-full flex cursor-pointer justify-center items-center bg-slate-200 h-[35px] ">
                <BsYoutube size={20}/>
            </div>
          </div>
          </div>
        </div>
        <div className="h-[50px] w-full  flex justify-center items-center text-[18px]">
         &copy; Copyright-Nishan @ 2021
        </div>
      </div>
    </div>
  );
};

export default Footer;
