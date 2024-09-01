const Videocard = ({items}) => {
    //console.log(items);
    let {snippet,statistics}=items;
    let {title,channelTitle}=snippet;
    return (
        <div className="w-[320px] h-[370px] rounded-lg p-1 cursor-pointer">
            <img alt="thumbnail_image" className="rounded-lg" src={snippet.thumbnails.high.url}/>
            <div className="font-semibold p-2">
                {title}
            </div>
            <div className="text-sm pl-2">
                {channelTitle}
            </div>
            <span className="text-sm pl-2">
            {statistics.viewCount} views
            </span>
        </div>
    )
}
export default Videocard;