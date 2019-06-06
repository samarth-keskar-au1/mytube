import React from 'react';
import {store,stateMapper} from '../store/store.js';
import {connect} from 'react-redux';
import {Videos} from './Videos.js';


class TrendingVideosComponent extends React.Component {
    componentDidMount() {
        store.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"trending"
        }) 
    }
    render() {
        return( 
            <React.Fragment>
            <h1>Trending Videos</h1>
            <hr/>
            <Videos/>
            </React.Fragment>
        );
    }
}

let Trending = connect(stateMapper)(TrendingVideosComponent);

export {Trending}