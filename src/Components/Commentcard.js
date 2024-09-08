import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const Commentcard = ({ data }) => {
    
    return (
        <div>
            {data &&
                data.map((mp) => (
                    <div className="my-3 border lg:p-3 p-2 rounded-lg bg-slate-100">
                        <div className="flex gap-3">
                            <img className="rounded-full w-10 h-10" alt="logo" src={mp?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}/>
                            <div>
                            <p className="font-semibold">
                                {
                                    mp?.snippet?.topLevelComment?.snippet
                                        ?.authorDisplayName
                                }
                            </p>
                            <p>
                                {
                                    mp?.snippet?.topLevelComment?.snippet
                                        ?.textDisplay
                                }
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-10 mx-12 my-2 text-2xl">
                            <AiOutlineLike/>
                            <BiDislike/>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Commentcard;
