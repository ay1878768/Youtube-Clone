import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import {  useSelector } from "react-redux";
import Secondsidebar from "./Secondsidebar";
const Sidebar = () => {
    const isShowMenuBar=useSelector((store)=>store.menu.isShowMenuBar);
    if(!isShowMenuBar) {
        return <Secondsidebar/>;
    }
    return (
        <div className={`bg-white w-[12rem] pl-3 mx-2 sticky top-16 z-10`}>
            <div className="flex flex-col justify-center items-left gap-2 text-md font-sm">
                <div className="flex justify-left items-center gap-5 bg-slate-300 hover:bg-slate-300 p-2 rounded-lg cursor-pointer whitespace-nowrap">
                    <div>
                        <CiHome />
                    </div>
                    <div>Home</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <SiYoutubeshorts />
                    </div>
                    <div>Shorts</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <MdOutlineSubscriptions />
                    </div>
                    <div>Subscription</div>
                </div>
            </div>
            <hr className="m-3" />
            <div className="flex flex-col justify-center items-left gap-2 text-md font-sm">
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer font-semibold ">
                    <div>You</div>
                    <div>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer whitespace-nowrap">
                    <div>
                        <RiContactsLine />
                    </div>
                    <div>Your Channel</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <MdHistory />
                    </div>
                    <div>History</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <MdOutlineSubscriptions />
                    </div>
                    <div>Playlist</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <LiaFileVideoSolid />
                    </div>
                    <div>Your Videos</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <MdOutlineWatchLater />
                    </div>
                    <div>Watch Later</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <AiOutlineLike />
                    </div>
                    <div>Liked Videos</div>
                </div>
                <div className="flex justify-left items-center gap-5 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
                    <div>
                        <PiDownloadSimple />
                    </div>
                    <div>Downloads</div>
                </div>
            </div>
            <hr className="m-3" />
        </div>
    );
};
export default Sidebar;
