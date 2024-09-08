
export const API_KEY=process.env.API_KEY;
export const YOUTUBE_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&maxResults=48&chart=mostPopular&regionCode=IN&key="+API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";