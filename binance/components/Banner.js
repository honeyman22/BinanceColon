import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 flex justify-center items-center ">
        <div className="w-[90%] flex flex-col justify-center items-center h-[200px] ">
          <div className="text-[40px] full flex justify-center items-center font-serif font-semibold ">
            Start earning today
          </div>
          <div className="text-[18px] full flex justify-center items-center font-serif ">
            <button className="px-12 py-2 rounded-md bg-yellow-400 mt-8">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
