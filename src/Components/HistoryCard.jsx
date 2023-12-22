import React from "react";
import imageLogo from '../assets/images/HistoryItemLogo.png'
import imageLogo2 from '../assets/images/HistoryItemLogo2.png'
import imageLogo3 from '../assets/images/HistoryItemLogo3.png'
import Logo from '../assets/images/logo.png'
import CommonBtn from "./CommonBtn";
const HistoryCard = () => {
  const CardItems = [
    {
      image: imageLogo,
      'h2': "Cet #6882",
      'p': "Cets on Creck",
      logo: Logo,
      Number: "250"

    },
    {
      image: imageLogo2,
      'h2': "Bored Ape #981",
      'p': "Bored Ape Solana Club",
      logo: Logo,
      Number: "38"

    },
    {
      image: imageLogo3,
      'h2': "SolPunk #7803",
      'p': "SolPunks",
      logo: Logo,
      Number: "15"

    },
  ]
  const CardComponets = CardItems.map((listing) => (
    <div className="flex items-center justify-between mt-2 sm:mt-[13px]">
      <div className="flex items-center">
        <img className="max-xs:w-10 max-xs:h-10 rounded-full" src={listing.image} alt={listing.p} />
        <div className="flex flex-col ml-[11px] gap-[6px]">
          <h2 className="text-xs sm:text-sm font-medium sm:font-bold text-[#474749] font-Inter">{listing.h2}</h2>
          <p className="text-[10px] sm:text-xs font-normal text-[#474749] font-Inter">{listing.p}</p>
        </div>
      </div>
      <div className="flex items-center text-end gap-[2px] mr-[1px]">
        <img src={listing.logo} alt={listing.p} />
        <p className="text-xs font-normal text-[#474749] font-Inter">{listing.Number}</p>
      </div>
    </div>
  ))
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl xl:mt-12 flex w-full">
      <div className=" py-2 px-3 sm:py-5 sm:px-6 min-h-[300px] xs:min-h-[400px] lg:min-h-[447px] w-full flex flex-col justify-between">
        <div>
          <div className=" flex justify-between items-center mb-6">
            <p className="text-[#4F4F4F] text-sm sm:text-base font-medium font-Inter">
            History
            </p>
            <select className='flex items-center border text-[#4F4F4F] outline-none border-[#A8A8A8] rounded-md px-1 py-[2px] sm:px-2 sm:py-1 text-[10px] sm:text-xs font-Inter font-normal'>Last Month <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <option className='text-[10px] sm:text-xs font-Inter font-normal'>Last Month</option>
              <option className='text-[10px] sm:text-xs font-Inter font-normal'>August</option>
              <option className='text-[10px] sm:text-xs font-Inter font-normal'>September</option>
              <option className='text-[10px] sm:text-xs font-Inter font-normal'>October</option>
            </select>
          </div>
          {CardComponets}
          </div>
        <CommonBtn text="Show All" />
      </div>
    </div>
  );
};

export default HistoryCard;
