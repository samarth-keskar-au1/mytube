import React from "react";
import { stateMapper, store } from "../store/store.js";
import { connect } from "react-redux";

class SingleVideoComponent extends React.Component {
    state ={};
  componentDidMount() {
    store.dispatch({
      type: "FETCH_SINGLE_VIDEO",
      video: this.props.match.params.videoId
    });
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
                {this.props.video.snippet.description}
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

}

let SingleVideo = connect(stateMapper)(SingleVideoComponent);

export { SingleVideo };
