import Image from "next/image";
import React from "react";

const MainCard = () => {
  return (
    <div>
      <div className="w-full  flex justify-center py-10 items-center">
        <div className="w-[90%]  h-[280px] flex items-center">
          <div className="h-full w-[40%] rounded-md overflow-hidden relative">
            <Image
              src={require("../../public/image/blog1.jpeg")}
              alt="one"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[60%] flex flex-col px-4 items-start justify-center h-full">
            <div className="text-[40px] w-[70%] leading-[45px] h-[35%] overflow-hidden font-serif text-clip line-clamp-2 font-semibold">
              ​Former DigitalX CEO Leigh Travers Joins Binance Australia...
            </div>
            <div className="text-[20px] w-full max-h-[40%] leading-[24px] overflow-hidden text-black/60 font-serif">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              excepturi unde doloremque odio modi tempore velit distinctio
              possimus, quidem cumque ea, reiciendis explicabo dolorem eveniet
              nam hic nisi placeat totam!
            </div>
            <div className="text-[20px] mt-2 font-serif">2018-10-23</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
