import React from "react";
import Nav from "./Nav";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";

const MainSection = () => {
  return (
      <div className="flex flex-col xl:flex-row w-full">
        <div className="xl:w-[70%]">
        <MainFirst />
        </div>
        <div className="xl:w-[30%]">
        <MainSecond />
        </div>
      </div>
  );
};

export default MainSection;
