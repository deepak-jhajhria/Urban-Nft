import { Route, Routes } from "react-router-dom";
import "./App.css";
import MetroverseCard from "./Components/MetroverseCard";
import NewNft from "./Components/NewNft";
import SideBar from "./Components/SideBar";
import Nav from "./Components/Nav";
import MainSection from "./Components/MainSection";
import Collection from "./Components/Collection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full bg-[#EDF1F2] min-h-screen pl-2 sm:pl-4 md:pl-6 pr-3 sm:pr-6 md:pr-[46px]">
          <Nav />
          <div className="mt-3 sm:mt-5 md:mt-7 lg:mt-9">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/market" element={<MetroverseCard />} />
            <Route path="Favorites" element={<Collection />} />
            <Route path="insight" element={<NewNft />} />
            <Route path="wallet" element={<NewNft />} />
          </Routes>
          </div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
