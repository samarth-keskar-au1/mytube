import {store} from '../store.js';
import {fetchSingleVideo} from '../api/youtube.js'

export default function singleVideoReducer(video={},action) {
    if(action.type === "FETCH_SINGLE_VIDEO") {
        fetchSingleVideo(store,action);
    }

    if(action.type === "CLEAR_SINGLE_VIDEO_DATA") {
        return  {};
    }

    if(action.type === "SINGLE_VIDEO_LOADED") {
       video = action.video
       video.snippet.short = action.video.snippet.description.slice(0,200);
    }

    return video;
}
