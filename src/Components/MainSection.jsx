import React from "react";
import Nav from "./Nav";
import MainFirst from "./MainFirst";

const MainSection = () => {
  return (
    <div className="w-full">
      <Nav />
      <div className="flex gap-9">
        <MainFirst />
      </div>
    </div>
  );
};

export default MainSection;
