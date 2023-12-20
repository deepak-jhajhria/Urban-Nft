import React from "react";
import CommonBtn from "./CommonBtn";
// import metroSecBg from '../assets/images/metroSecBg.png'
import sliderImg from '../assets/images/SliderImg.png'
const MetroverseCard = () => {
  return (
    <div className="bg-white rounded-[18px] shadow mt-9">
      <div className="p-7">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-darkGold-gradient text-base font-medium font-Inter leading-tight">
              Create MetroVerse Genesis
            </div>
            <div className="max-w-[283px] text-[#7C7C7C] text-xs font-medium font-Inter mt-[30px]">
              physical claim for issue #1 now live. please check that the token
              is available for claim via website
            </div>
            <div className="max-w-[140px] mt-[30px]">
              <CommonBtn text="Explorer Now" />
              <div className="border border-[#FFC881] rounded-lg w-[300px] mt-5">
                <div className="flex w-full justify-evenly">
                  <div className="flex flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-3 pb-2">
                    <p className="text-orange-300 text-xs font-bold">24.8K</p>
                    <p className="text-zinc-500 text-[10px] font-medium">
                      Items
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-3 pb-2">
                    <p className="text-orange-300 text-xs font-bold">4,1K</p>
                    <p className="text-zinc-500 text-[10px] font-medium">
                    Owners
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center border-r border-[#FFC881] pt-3 px-3 pb-2">
                    <p className="text-orange-300 text-xs font-bold">0.221</p>
                    <p className="text-zinc-500 text-[10px] font-medium">
                    Floor Price
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-3 px-3 pb-2">
                    <p className="text-orange-300 text-xs font-bold">43.1K</p>
                    <p className="text-zinc-500 text-[10px] font-medium flex-nowrap" >
                    Volume Traded
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" translate-y-14">
                <img className="rounded-2xl" src={sliderImg} alt="sliderimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetroverseCard;
