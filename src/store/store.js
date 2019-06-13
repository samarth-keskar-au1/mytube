import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videosReducer.js'
import isVideosLoadingReducer from './reducers/isVideosLoading.js';
import singleVideoReducer from './reducers/SingleVideoReducer.js';
import relatedVideosReducer from './reducers/relatedVideosReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoCommentsReducer.js';
import userPlaylistsReducer from './reducers/getUserPlaylists.js';

let reducer = combineReducers({
    videos:videosReducer,
    isVideosLoading:isVideosLoadingReducer,
    video:singleVideoReducer,
    relatedVideos:relatedVideosReducer,
    currentVideoComments:currentVideoCommentsReducer,
    playlists:userPlaylistsReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});

let stateMapper = function (state) {
    return state;
}

export{store,stateMapper}