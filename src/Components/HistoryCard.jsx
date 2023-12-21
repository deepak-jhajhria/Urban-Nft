import React from "react";
import imageLogo from '../assets/images/HistoryItemLogo.png'
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
      image: imageLogo,
      'h2': "Cet #6882",
      'p': "Cets on Creck",
      logo: Logo,
      Number: "250"

    },
    {
      image: imageLogo,
      'h2': "Cet #6882",
      'p': "Cets on Creck",
      logo: Logo,
      Number: "250"

    },
  ]
  const CardComponets = CardItems.map((listing) => (
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center">
        <img src={listing.image} alt={listing.p} />
        <div className="flex flex-col ml-3">
          <h2 className="text-sm font-bold text-[#464649] font-Inter">{listing.h2}</h2>
          <p className="text-xs font-normal text-[#464649] font-Inter">{listing.p}</p>
        </div>
      </div>
      <div className="flex items-center text-end">
        <img src={listing.logo} alt={listing.p} />
        <p className="text-xs font-normal text-[#464649] font-Inter">{listing.Number}</p>
      </div>
    </div>
  ))
  return (
    <div className="bg-white rounded-2xl md:mt-16 flex w-full">
      <div className="py-5 px-6 min-h-[447px] w-full flex flex-col justify-between">
        <div>
          <div className=" flex justify-between items-center mb-5">
            <p className="text-neutral-600 text-base font-semibold font-Inter">
            History
            </p>
            <select className='flex items-center border text-[#4F4F4F] outline-none border-[#A8A8A8] rounded-md px-2 py-1'>Last Month <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <option className='hover:bg-slate-100'>Last Month</option>
              <option className='hover:bg-slate-100'>August</option>
              <option className='hover:bg-slate-100'>September</option>
              <option className='hover:bg-slate-100'>October</option>
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
