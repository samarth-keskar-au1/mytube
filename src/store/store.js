import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videosReducer.js'
import isVideosLoadingReducer from './reducers/isVideosLoading.js';
import singleVideoReducer from './reducers/SingleVideoReducer.js';
import relatedVideosReducer from './reducers/relatedVideosReducer.js';

let reducer = combineReducers({
    videos:videosReducer,
    isVideosLoading:isVideosLoadingReducer,
    video:singleVideoReducer,
    relatedVideos:relatedVideosReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});


let stateMapper = function (state) {
    return state;
}

export{store,stateMapper}