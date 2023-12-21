import React from "react";
import NewNft from "./NewNft";
import HistoryCard from "./HistoryCard";

const MainSecond = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row xl:flex-col gap-5">
      <NewNft />
      <HistoryCard />
    </div>
  );
};

export default MainSecond;
