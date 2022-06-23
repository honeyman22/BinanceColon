import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import {FaUserTie} from "react-icons/fa"
const Need = () => {
  return (
    <div>
        <div className="w-full flex justify-center items-start">
            <div className="w-[90%] h-[300px] ">
                <div className="text-[40px] font-serif font-medium "> Need Help ?</div>
                <div className="flex w-full">
                    <div className="w-[33%] mt-5 flex items-center h-[160px] px-5">
                        <div className="w-[80px] flex items-center justify-between h-[80px] ">
                                   <FaUserTie fill='yellow' size={60}/>
                        </div>
                        <div className="w-[85%] pl-4  flex flex-col h-full justify-center ">
                            <div className="text-[20px] font-serif font-normal">24/7 Chat Support</div>
                            <div className="text-[15px] font-serif font-light text-black/80">Get 24/7 chat support with our friendly customer service agents at your service.</div>
                            <div className="text-[16px] flex items-center gap-2 font-serif mt-2 text-yellow-600 cursor-pointer ">Chat now <AiOutlineRight/></div>
                        </div>
                    </div>
                     <div className="w-[33%] mt-5 flex items-center h-[160px] px-5">
                        <div className="w-[80px] flex items-center justify-between h-[80px] ">
                                   <FaUserTie fill='yellow' size={60}/>
                        </div>
                        <div className="w-[85%] pl-4  flex flex-col h-full justify-center ">
                            <div className="text-[20px] font-serif font-normal">FAQs</div>
                            <div className="text-[15px] font-serif font-light text-black/80">View FAQs for detailed instructions on specific features.</div>
                            <div className="text-[16px] flex items-center gap-2 font-serif mt-2 text-yellow-600 cursor-pointer "> Learn more<AiOutlineRight/></div>
                        </div>
                    </div>
                     <div className="w-[33%] mt-5 flex items-center h-[160px] px-5">
                        <div className="w-[80px] flex items-center justify-between h-[80px] ">
                                   <FaUserTie fill='yellow' size={60}/>
                        </div>
                        <div className="w-[85%] pl-4  flex flex-col h-full justify-center ">
                            <div className="text-[20px] font-serif font-normal">Blogs </div>
                            <div className="text-[15px] font-serif font-light text-black/80">Stay up to date with the latest stories and commentary.</div>
                            <div className="text-[16px] flex items-center gap-2 font-serif mt-2 text-yellow-600 cursor-pointer ">Learn more <AiOutlineRight/></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Need