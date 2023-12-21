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
        <div className="w-full bg-[#EDF1F2] min-h-screen px-2 sm:px-4 md:px-6">
          <Nav />
          <div>
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
