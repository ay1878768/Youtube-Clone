import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, showMenu } from "../utils/menuSlice";
const Videocontainer = () => {
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(showMenu());
    },[dispatch]);
    useEffect(() => {
        fetchData();
    }, []);
    const [videoData, setVideoData] = useState([]);
    const fetchData = async () => {
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json();
        //console.log(json.items);
        setVideoData(json.items);
    };
    return (
        <div className="flex flex-wrap justify-around m-1 mt-16 border-2 w-fit flex-1 overflow-auto">
            {videoData.map((mp) => (
                <Link to={"/watch/?v=" + mp.id} key={mp.id}>
                    <Videocard items={mp} />
                </Link>
            ))}
        </div>
    );
};
export default Videocontainer;
