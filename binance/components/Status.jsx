import React from 'react'

const Status = ({status}) => {
  
  return (
    <div className='flex flex-col items-center justify-center bg-[#e0e0d1] w-full px-10'>
        <div className="w-[90%] h-[250px] flex flex-row shrink-0 gap-4    items-center">
           <div className="flex flex-col p-5 w-full justify-center  sm:w-[50%] lg:w-[24%] h-[200px] ">
             <div className="text-[36px] leading-10 font-serif font-[500]"> 500+ billion </div>
             <div className="text-[16px] ">24h trading volume on Binance exchange</div>
           </div>
           <div className="flex flex-col p-5 w-full justify-center  sm:w-[50%] lg:w-[24%] h-[200px] ">
             <div className="text-[36px] leading-10 font-serif font-[500]"> {status?.totalCoins}+ </div>
             <div className="text-[16px] "> Cryptocurrencies listed</div>
           </div>
           <div className="flex flex-col p-5 w-full justify-center  sm:w-[50%] lg:w-[24%] h-[200px] ">
             <div className="text-[36px] leading-10 font-serif font-[500]"> 983 billion </div>
             <div className="text-[16px] "> Total Market Capital</div>
           </div>
           <div className="flex flex-col p-5 w-full justify-center  sm:w-[50%] lg:w-[24%] h-[200px] ">
             <div className="text-[36px] leading-10 font-serif font-[500]"> {status?.totalExchanges}+ </div>
             <div className="text-[16px] "> Total Exchanges</div>
           </div>
        </div>
    </div>
  )
}

export default Status