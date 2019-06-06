import {store} from '../store.js';
import {fetchVideos} from '../api/youtube.js'

export default function videosReducer(videos=[],action) {
    if(action.type === "FETCH_VIDEOS") {
        fetchVideos(store,action);
    }

    if(action.type === "CLEAR_VIDEOS") {
        return [];
    }

    if(action.type === "VIDEOS_LOADED") {
       videos = action.videos
    }

    return videos;
}

