import React from "react";
import collection1 from "../assets/images/CollectionImg1.png";
import collection2 from "../assets/images/CollectionImg2.png";
import collection3 from "../assets/images/CollectionImg3.png";
import collection1Logo from "../assets/images/CollectionImg1logo.png";
import collection2Logo from "../assets/images/CollectionImg2logo.png";
import collection3Logo from "../assets/images/CollectionImg3logo.png";
const Collection = () => {
  const CardValue = [
    {
      id: "1",
      heading: "Jozo Gators",
      image: collection1,
      imageLogo: collection1Logo,
      discription: "Collection",
      para: "1.1K",
    },
    {
      id: "1",
      heading: "Jozo Gators",
      image: collection2,
      imageLogo: collection2Logo,
      discription: "Collection",
      para: "1.1K",
    },
    {
      id: "1",
      heading: "Jozo Gators",
      image: collection3,
      imageLogo: collection3Logo,
      discription: "Collection",
      para: "1.1K",
    },
  ];
  const listingComponents = CardValue.map((listing) => (
    <div className="w-full" key={listing.id}>
      <div style={{ backgroundImage: `url(${listing.image})`}} className="w-full min-h-[150px] bg-no-repeat bg-cover items-center justify-center flex rounded-xl relative z-0">
      <div className=" flex items-center justify-center flex-col z-20">
          <img className="rounded-md mt-4" src={listing.imageLogo} alt={listing.discription} />
          <h2 className="text-center text-white text-base font-semibold font-Inter">{listing.heading}</h2>
          <p className="text-white text-[11px] font-normal font-Inter"> {listing.para}</p>
        <div className="w-full h-[69px] absolute bottom-0 left-0 -z-10  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70 overflow-hidden rounded-b-xl"></div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-4">
        <p className="text-neutral-600 text-base font-semibold font-Inter">Top Collections</p>
        <button className="flex items-center gap-3 font-Inter text-xs font-semibold text-[#4F4F4F]">View All<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.167 7.81706L3.16699 7.81706" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{listingComponents}</div>
    </div>
  );
};

export default Collection;
