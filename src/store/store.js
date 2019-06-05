import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videosReducer.js'

let reducer = combineReducers({
    videos:videosReducer
});

let store = createStore(reducer);

store.subscribe(function(){
    console.log( store.getState() );
});


let stateMapper = function (state) {
    return state;
}

export{store,stateMapper}