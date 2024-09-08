import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { PiDownloadSimple } from "react-icons/pi";
import {  useSelector } from "react-redux";

const Secondsidebar = () => {
    const closeMenu=useSelector((store)=>store.menu.closeMenu);
    if(!closeMenu) {
        return null;
    }
    return (
        <div className="bg-white flex flex-col sticky top-16">
            <div className="p-2 w-[70px] cursor-pointer hover:bg-slate-300 rounded-lg">
                <CiHome className="text-2xl text-center mx-auto"/>
                <p className="text-xs text-center">Home</p>
            </div>
            <div className="p-2 w-[70px] cursor-pointer hover:bg-slate-300 rounded-lg">
                <SiYoutubeshorts className="text-2xl text-center mx-auto"/>
                <p className="text-xs text-center">Shorts</p>
            </div>
            <div className="p-1 w-[70px] cursor-pointer hover:bg-slate-300 rounded-lg">
                <MdOutlineSubscriptions className="text-2xl text-center mx-auto"/>
                <p className="text-xs text-center">Subscription</p>
            </div>
            <div className="p-2 w-[70px] cursor-pointer hover:bg-slate-300 rounded-lg">
                <RiContactsLine className="text-2xl text-center  mx-auto"/>
                <p className="text-xs text-center">You</p>
            </div>
            <div className="p-2 w-[70px] cursor-pointer hover:bg-slate-300 rounded-lg">
                <PiDownloadSimple className="text-2xl text-center mx-auto"/>
                <p className="text-xs text-center">Downloads</p>
            </div>
        </div>
    )
}

export default Secondsidebar;