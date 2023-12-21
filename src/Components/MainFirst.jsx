import React from "react";
import MetroverseCard from "./MetroverseCard";
import Collection from "./Collection";
import Trading from "./Trading";

const MainFirst = () => {
  return (
    <div className="w-full">
      <MetroverseCard />
      <Collection />
      <Trading />
    </div>
  );
};

export default MainFirst;
