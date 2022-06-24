import Image from "next/image";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="w-full  flex justify-center py-10 items-center">
        <div className="w-[90%] flex-wrap flex items-center">
          {news &&
            news.map((item) => (
              <div
                key={item.name}
                className=" w-full sm:w-[50%] lg:w-[33%] h-[420px] rounded-md duration-150 delay-100 hover:shadow-md gap-5 flex flex-col hover:bg-slate-100 p-5 "
              >
                <div className="w-full rounded-lg overflow-hidden h-[210px] relative">
                  <Image
                    src={require("../../public/image/news1.png")}
                    alt="news1"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="w-full h-[140] flex flex-col">
                  <div className="text-[20px] font-serif font-semibold w-full leading-[30px] max-h-[60px] overflow-clip">
                    {item.name}
                  </div>
                  <div className="text-[14px] text-black/60 leading-[20px] h-[60px] overflow-hidden">
                    {item.description}
                  </div>
                  <div className="text-[16px] font-serif py-2 ">
                    {item.datePublished.slice(0, 10)}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
