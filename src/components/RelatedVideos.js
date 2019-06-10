import React from "react";
import { stateMapper, store } from "../store/store.js";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class RelatedVideosComponent extends React.Component {
    componentDidMount() {
        store.dispatch({
            type:"FETCH_RELATED_VIDEOS",
            id:this.props.video.id
        })
    }

    
    render() {
       
        return(
            <React.Fragment>
            <h1>Related Videos</h1>
            <hr/>
            <div className="row">
            <ul className="list-unstyled">
                {this.props.relatedVideos.map(v => {

                    let videoId = v.id;

                     if(typeof videoId != "string") {
                            videoId = v.id.videoId;
                        }

                return(
                    <li key={v.etag} className="media">
                        <div className="col-md-5">
                        <img src={v.snippet.thumbnails.default.url} className="mr-3" alt="..."/>
                        <p></p>
                        </div>

                      <div className="col-md-7">
                      <div className="media-body">
                        <p className="font-weight-bold"><Link to={`/video/${videoId}`}>{v.snippet.title}</Link></p>
                        
                      </div>

                      </div>
                    </li>
                )
                })}
            </ul>
        </div>
</React.Fragment>
         );
    }
}

let RelatedVideos = connect(stateMapper)(RelatedVideosComponent);

export{RelatedVideos}