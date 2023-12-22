import React from "react";
import Nav from "./Nav";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";

const MainSection = () => {
  return (
        // main section 
      <div className="flex flex-col gap-5 sm:gap-7 lg:gap-[38px] xl:flex-row w-full">
        <div className="xl:w-[69%] ">
        <MainFirst />
        </div>
        <div className="xl:w-[30%]">
        <MainSecond />
        </div>
      </div>
  );
};

export default MainSection;
