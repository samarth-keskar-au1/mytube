import React from "react";
import { stateMapper, store } from "../store/store.js";
import { connect } from "react-redux";
import {RelatedVideos} from './RelatedVideos.js'

class SingleVideoComponent extends React.Component {
    state ={
      showMoreClicked:false
    };

  componentDidMount() {
    store.dispatch({
      type: "CLEAR_SINGLE_VIDEO_DATA"
    })
  } 

  componentWillReceiveProps()  {
    store.dispatch({
      type: "FETCH_SINGLE_VIDEO",
      video: this.props.match.params.videoId
    });
  }

  handleShowMore = () => {
    this.setState({
      showMoreClicked:true
    })
  }

  handleShowLess = () => {
    this.setState({
      showMoreClicked:false
    })
  }

  renderDescription = () => {
      if (this.state.showMoreClicked === false) {
        return (
        <React.Fragment>
          {this.props.video.snippet.short}
          <button className="btn btn-info m-1" onClick={this.handleShowMore}>See More</button>
        </React.Fragment>
        )
      } else if (this.state.showMoreClicked === true) {
        return (
        <React.Fragment>
          {this.props.video.snippet.description}
          <button className="btn btn-info m-1" onClick={this.handleShowLess}>Show Less</button>
        </React.Fragment>
        )
      }
  }

  renderVideo() {
    return <div className="embed-responsive embed-responsive-16by9">
        <iframe title={this.props.video.snippet.title} className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen />
    </div>;
}

  render() {
    if (!this.props.video.snippet) {
      return (
        <React.Fragment>
          <h1>Loading Video</h1>
          <hr />
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p />
          <h4>{this.props.video.snippet.title}</h4>
          <hr />
          <div className="row">
            <div className="col-md-8">
              {this.renderVideo()}
              <hr />
              <p />
              <p>
                <h4>Description:</h4>
                {this.renderDescription()}
              </p>
            </div>
            <div className="col-md-4">
              <RelatedVideos/>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

}

let SingleVideo = connect(stateMapper)(SingleVideoComponent);

export { SingleVideo };
