import "./App.css";
import MainSection from "./Components/MainSection";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="container max-w-screen-xl bg-[#EDF1F2] min-h-screen flex gap-6">
      <SideBar />
      <MainSection />
    </div>
  );
}

export default App;
