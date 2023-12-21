import MainSection from "./MainSection";
import SideBar from "./SideBar";
const Page = () => {
    return (
        <div>
            <div className="container p-0 max-w-screen-xxl bg-[#EDF1F2] min-h-screen flex gap-6">
                <SideBar />
                <MainSection />
            </div>
        </div>
    )
}

export default Page
