import { GiHamburgerMenu } from "react-icons/gi";
import { LiaVideoSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_URL } from "../utils/constants";
const Navbar = () => {
    const dispatch=useDispatch();
    const handleShowMenu = () => {
        dispatch(toggleMenu());
    }
    const [searchQuery,setSearchQuery]=useState("");
    const [searchSuggestion,setSearchSuggestion]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(false);
    useEffect(() => {
        const timer=setTimeout(()=> {getSearchQuery()},300);
        return () => {
            clearTimeout(timer);
        }
    },[searchQuery]);
    const getSearchQuery = async () => {
        //console.log(searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_SUGGESTION_URL+searchQuery);
        const json=await data.json();
        //console.log(json[1]);
        setSearchSuggestion(json[1]);
        // console.log(searchSuggestion);
    }
    return (
        <div>
        <div className="w-full bg-white flex justify-between items-center pl-5 m-0 fixed top-0 z-10 over">
            <div className="flex items-center text-2xl">
                <GiHamburgerMenu className="cursor-pointer" onClick={()=>handleShowMenu()}/>
                <img className="h-[60px] pl-2 cursor-pointer"  alt="youtube logo" src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"/>
            </div>
            <div className="w-[600px] flex">
                <input className="pl-5 w-[90%] border-2 rounded-l-full py-2 focus:outline-none focus:border-blue-400 focus:border:shadow-lg" type="text" placeholder="Search"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                <button className="pl-3 w-[10%] border rounded-r-full text-2xl py-2 bg-slate-100 hover:bg-slate-300" type="submit"><CiSearch/></button>
            </div>
            <div className="flex text-3xl  gap-5 pr-4">
                <LiaVideoSolid className="cursor-pointer "/>
                <IoIosNotifications className="cursor-pointer "/>
                <IoIosContact className="cursor-pointer"/>
            </div>
        </div>
        
        {showSuggestion&&<div className="fixed z-10 bg-white top-12 left-[31%] py-2 my-1 w-[33rem] rounded-lg">
        {searchSuggestion.map((mp) => (
            <ul>
                <li key={mp} className="p-2 px-3 w-full hover:bg-slate-300 rounded-lg"><CiSearch className="inline text-xl"/> {mp} </li>
                <hr/>
            </ul>
        ))}
        </div>}
        </div>
    );
}
export default Navbar;