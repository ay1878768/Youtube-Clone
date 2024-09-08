import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {closeMenu} from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
const Watchvideo = () => {
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    },[dispatch]);
    const [searchParams]=useSearchParams();
    const id=searchParams.get("v");
    return (
        <div className="w-2/3">
            <iframe
                className="mt-10 m-6 rounded-lg"
                width="1000"
                height="515"
                src={`https://www.youtube.com/embed/${id}?si=FHxWDgydUGFpyHG1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <Comments/>
        </div>
    );
};
export default Watchvideo;
