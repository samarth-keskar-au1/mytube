import React from 'react';
import {store,stateMapper} from '../store/store.js';
import {connect} from 'react-redux';

class VideosComponent extends React.Component {

    render() {
        if (this.props.isVideosLoading) {
            return (
                <React.Fragment>
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </React.Fragment>
            );
         } else { return(
            <div className="row">
                {this.props.videos.map( v => {
                    return (
                    <div key = {v.etag} className="col-sm-4"> 
                        <img alt={v.snippet.title} src= {v.snippet.thumbnails.medium.url} className="img-fluid"/>
                        <p></p>
                        <a href="http://"> {v.snippet.title}</a> <span>by</span> <a href=""> 
                        {v.snippet.channelTitle}</a> 
                        <p></p>
                    </div>
                    );
                })}
            </div>
            );
        }
    }

}


let Videos = connect(stateMapper)(VideosComponent);

export {Videos};
