import React from "react";
import Commentcard from "./Commentcard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {API_KEY} from "../utils/constants"
const Comments = ()  => {
    const [commentData, setCommentData] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=100`);
        const json = await data.json();
        //console.log(json.items);
        setCommentData(json.items);
    };
    return (
        <div className="lg:my-5 lg:ml-5 lg:w-[65vw] lg:h-[65vh] w-full">
            <p className="text-2xl font-bold">{(commentData.length) } Comments</p>
            <Commentcard data={commentData} />
        </div>
    );
};

export default Comments;
