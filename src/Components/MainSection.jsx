import React from "react";
import Nav from "./Nav";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";

const MainSection = () => {
  return (
    <div className="w-full">
      <Nav />
      <div className="flex w-full">
        <div className="w-[72%]">
        <MainFirst />
        </div>
        <div className="w-[28%]">
        <MainSecond />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
