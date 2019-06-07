import {store} from '../store.js';
import {fetchSingleVideo} from '../api/youtube.js'

export default function singleVideoReducer(video={},action) {
    if(action.type === "FETCH_SINGLE_VIDEO") {
        fetchSingleVideo(store,action);
    }

    if(action.type === "SINGLE_VIDEO_LOADED") {
       video = action.video
    }

    return video;
}
