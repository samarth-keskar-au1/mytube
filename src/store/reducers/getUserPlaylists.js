import {store} from '../store.js';
import {fetchPlaylists} from '../api/youtube.js'

export default function userPlaylistsReducer(playlists=[],action) {
    if(action.type === "FETCH_PLAYLISTS") {
        fetchPlaylists(store,action);
    }

    if(action.type === "PLAYLISTS_CREATED") {
        fetchPlaylists(store,action);
    }

    if(action.type === "PLAYLISTS_LOADED") {
        playlists = action.playlists;
    }
    return playlists;
}
