function fetchVideos(store,videoType) {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAw1hhc-ML2Ai6r8U6u5bVXnvpDgyFDs3w&maxResults=10")
    .then(response => response.json())
    .then(data => store.dispatch({ type: "VIDEOS_LOADED",videos: data.items}))
    .catch(err => console.log(err) );
}

export {fetchVideos};