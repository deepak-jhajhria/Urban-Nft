import React from "react";
import NewNftImg from "../assets/images/NewNft1.png";
import NewNftImg2 from "../assets/images/NewNft2.png";
import NewNftImg3 from "../assets/images/NewNft3.png";
import LikedImg from "../assets/images/Heart.png";
import sIcon from "../assets/images/logo.png";
const NewNft = () => {
  const NCards = [
    {
      image: NewNftImg,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by <span class='text-gold-gradient font-bold'>BabyKee</span>",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
    {
      image: NewNftImg2,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by <span class='text-gold-gradient font-bold'>BabyKee</span>",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
    {
      image: NewNftImg3,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by <span class='text-gold-gradient font-bold'>BabyKee</span>",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
  ];
  const NftCardsList = NCards.map((NCards) => (
    <div className="xl:w-full p-[9px] bg-white rounded-[18px]">
      <div className="flex w-full gap-3">
          <img className="w-full max-w-[104px] h-auto rounded-xl" src={NCards.image} alt={NCards.para1} />
        <div className="w-full">
          <p className="text-[#7C7C7C] text-[7px] font-medium leading-3 font-Inter">{NCards.para1}</p>
          <h2 className="text-[#474749] text-xs sm:text-sm font-bold pt-2 font-Inter leading-none"> {NCards.heading}</h2>
          <p className="text-[#7C7C7C] text-[7px] font-medium mt-[7px] mb-3 leading-none font-Inter" dangerouslySetInnerHTML={{ __html: NCards.para }}></p>
          <div className="flex justify-between">
            <div className="flex items-center gap-[5px]">
              <img src={NCards.likedImg} alt="likedimg" />
              <p className=" text-sm font-medium leading-none ff-inter text-[#130F26]">{NCards.liked}</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="mt-[2px]" src={NCards.sIcon} alt="icon" />
              <p className="mr-4 text-sm font-medium leading-none ff-inter text-[#130F26]">{NCards.number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col w-full">
      <p className="text-[#4F4F4F] text-base font-semibold font-Inter mb-4 mt-[-12px]">New NFTs</p>
      <div className="flex flex-col gap-3">{NftCardsList}</div>
    </div>
  );
};

export default NewNft;
