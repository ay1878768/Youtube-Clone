import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import Livechat from "./Livechat";
const Watchvideo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    return (
        <div className="">
            <div className="lg:flex lg:flex-row flex flex-col mt-10">
                <div>
                    <iframe
                        className="lg:m-6 m-1 rounded-lg lg:w-[60vw] lg:h-[65vh] w-full h-[40vh]"
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${id}?si=FHxWDgydUGFpyHG1?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="lg:w-[32vw] bg-slate-300 lg:m-6 w-full h-[65vh] rounded-lg overflow-y-scroll">
                <Livechat/>
                </div>
            </div>
            <Comments /> 
            
        </div>
    );
};
export default Watchvideo;
