import React from "react";
import NewNftImg from "../assets/images/NewNft1.png";
import LikedImg from "../assets/images/Heart.png";
import sIcon from "../assets/images/logo.png";
const NewNft = () => {
  const NCards = [
    {
      image: NewNftImg,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by BabyKee",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
    {
      image: NewNftImg,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by BabyKee",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
    {
      image: NewNftImg,
      para1: "Metroverse Genesis",
      heading: "Block #1460",
      para: "Owned by BabyKee",
      liked: "1K",
      likedImg: LikedImg,
      number: "21",
      sIcon: sIcon,
    },
  ];
  const NftCardsList = NCards.map((NCards) => (
    <div className="max-w-[319px] p-[9px] bg-white rounded-[18px] mb-3">
      <div className="flex w-full gap-3">
          <img
            className="w-full max-w-[104px] h-full rounded-xl"
            src={NCards.image}
            alt="Nft-img-1"
          />
        <div className="w-full">
          <p className="text-[#7C7C7C] text-[7px] font-medium leading-3">
            {NCards.para1}
          </p>
          <h2 className="text-[#474749] text-sm font-bold leading-4 pt-2">
            {NCards.heading}
          </h2>
          <p className="text-[#7C7C7C] text-[7px] font-medium leading-3 pt-2 pb-3">
            {NCards.para}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img className="mt-[2px]" src={NCards.likedImg} alt="likedimg" />
              <p className=" text-sm font-medium leading-4 ff-inter text-[#130F26]">
                {NCards.liked}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img className="mt-[2px]" src={NCards.sIcon} alt="icon" />
              <p className=" pr-4  text-sm font-medium leading-4 ff-inter text-[#130F26]">
                {NCards.number}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <p className="text-neutral-600 text-base font-semibold font-Inter mt-7 mb-4">
      New NFTs
      </p>
      {NftCardsList}
    </>
  );
};

export default NewNft;
