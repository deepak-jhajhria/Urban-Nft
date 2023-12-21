import React from "react";
import Nav from "./Nav";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";

const MainSection = () => {
  return (
        // main section 
      <div className="flex flex-col xl:flex-row w-full pr-2 sm:pr-4 md:pr-6 lg:pr-8">
        <div className="xl:w-[72%] ">
        <MainFirst />
        </div>
        <div className="xl:w-[28%]">
        <MainSecond />
        </div>
      </div>
  );
};

export default MainSection;
