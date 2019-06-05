import {store} from '../store.js';
import {fetchVideos} from '../api/youtube.js'

export default function videosReducer(videos=[],action) {
    if(action.type === "FETCH_VIDEOS") {
        fetchVideos(store,action.videoType);
    }

    if(action.type === "VIDEOS_LOADED") {
       videos = action.videos
    }

    return videos;
}

