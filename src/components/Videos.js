import React from 'react';
import {stateMapper} from '../store/store.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
                    let videoId = v.id;

                    if(typeof videoId != "string") {
                        videoId = v.id.videoId;
                    }

                    return (
                    <div key = {v.etag} className="col-sm-4"> 
                        <img alt={v.snippet.title} src= {v.snippet.thumbnails.medium.url} className="img-fluid"/>
                        <p></p>
                        <Link to={`/video/${videoId}`}>{v.snippet.title}</Link> <span>by</span> <em> 
                        {v.snippet.channelTitle}</em> 
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
