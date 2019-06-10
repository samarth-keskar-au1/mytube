import {config} from '../../config.js';

function fetchVideos(store,action) {
    if(action.videoType === "trending") {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${config.api_key}&maxResults=5`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "VIDEOS_LOADED",videos: data.items}))
        .catch(err => console.log(err) );
    }

    if(action.videoType === "search") {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${config.api_key}&part=snippet&q=${action.query}&maxResults=5`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "VIDEOS_LOADED",videos: data.items}))
        .catch(err => console.log(err) );
    }

}

function fetchRelatedVideos(store,action) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${action.id}&type=video&key=${config.api_key}`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "RELATED_VIDEOS_LOADED",relatedVideos: data.items}))
        .catch(err => console.log(err) );
}

function fetchSingleVideo(store,action) {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${action.video}&key=${config.api_key}`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "SINGLE_VIDEO_LOADED",video: data.items[0]}))
        .catch(err => console.log(err) );

}

export {fetchVideos,fetchSingleVideo,fetchRelatedVideos};



