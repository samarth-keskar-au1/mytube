import {store} from '../store.js';
import {fetchRelatedVideos} from '../api/youtube.js'

export default function relatedVideosReducer(relatedVideos=[],action) {
    if(action.type === "FETCH_RELATED_VIDEOS") {
        fetchRelatedVideos(store,action);
    }

    if(action.type === "CLEAR_RELATED_VIDEOS") {
        return [];
    }

    if(action.type === "RELATED_VIDEOS_LOADED") {
       relatedVideos = action.relatedVideos
    }

    return relatedVideos;
}

