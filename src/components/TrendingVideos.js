import React from 'react';
import {store,stateMapper} from '../store/store.js';
import {connect} from 'react-redux';

class TrendingVideosComponent extends React.Component {
     componentDidMount() {
        store.dispatch({
            type:"FETCH_VIDEOS"
        }) 
    }

    render() {
        return(
            <div className="row">
                {this.props.videos.map( v => {
                    return (
                    <div key = {v.id} className="col-sm-4"> 
                        <img alt={v.snippet.title} src= {v.snippet.thumbnails.medium.url} className="img-fluid"/>
                        <a href="http://"> {v.snippet.title}</a>   
                    </div>
                    );
                })}
            </div>
        );
    }


}


let TrendingVideos = connect(stateMapper)(TrendingVideosComponent);

export {TrendingVideos};
