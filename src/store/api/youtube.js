import {config} from '../../config.js';

function getUserToken () {
    let User = JSON.parse(localStorage.getItem("user"));
    return User.token;
}

function fetchVideos(store,action) {
    if(action.videoType === "trending") {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${config.api_key}&maxResults=5`)
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
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${action.id}&type=video&key=${config.api_key}&maxResults=5`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "RELATED_VIDEOS_LOADED",relatedVideos: data.items}))
        .catch(err => console.log(err) );
}

function fetchSingleVideo(store,action) {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${action.video}&key=${config.api_key}`)
        .then(response => response.json())
        .then(data => store.dispatch({ type: "SINGLE_VIDEO_LOADED",video: data.items[0]}))
        .catch(err => console.log(err) );

}

function fetchPlaylists(store,action) {
    fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=3&mine=true`,{
        headers:{
            Authorization:`Bearer ${getUserToken()}`
        }
    })
    .then(response => response.json())
    .then(data => store.dispatch({ type: "PLAYLISTS_LOADED", playlists: data.items}))
    .catch(err => console.log(err) );

}

function fetchVideoComments(store,action){
    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=5&videoId=${action.videoId}&key=${config.api_key}`)
    .then(response => response.json())
    .then(data => store.dispatch({ type:"VIDEO_COMMENTS_LOADED",comments:data.items}))
    .catch(err => console.log(err) );
}

export {fetchVideos,fetchSingleVideo,fetchRelatedVideos,fetchVideoComments,fetchPlaylists};



