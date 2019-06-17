import {store} from '../store.js';
import {createPlaylist} from '../api/youtube.js'


export default function createNewPlaylistReducer(newPlaylist={},action) {
    if(action.type === "CREATE-PLAYLIST") {
        createPlaylist(store,action);
    }

    if(action.type === "CLEAR_CREATED_PLAYLIST") {
        return {};
    }

    if(action.type === "PLAYLISTS_CREATED") {
        return newPlaylist = action.playlist;
    }

    return newPlaylist;
}

