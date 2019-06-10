import React from 'react';
import { connect } from 'react-redux'
import { stateMapper,store } from '../store/store.js'

class CommentsComponent extends React.Component {

    componentDidMount() {

        store.dispatch({
            type: "FETCH_VIDEO_COMMENTS",
            videoId: this.props.videoId
        })
    }

    render() {
        return (
            this.props.currentVideoComments.map(c => {
                return (

                    <p key={c.id}>
                        <img title="title" src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                        <strong>{c.snippet.topLevelComment.snippet.authorDisplayName}</strong><br/>
                        {c.snippet.topLevelComment.snippet.textOriginal}
                        <hr />
                    </p>

                )
            })
        )
    }
}

let Comments = connect(stateMapper)(CommentsComponent);
export {Comments}