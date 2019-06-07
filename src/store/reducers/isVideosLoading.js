export default function isVideosLoadingReducer(isVideosLoading = false,action) {
    if(action.type === "FETCH_VIDEOS") {
       return  isVideosLoading = true
    }

    if(action.type === "VIDEOS_LOADED") {
       return isVideosLoading = false
    }

     return isVideosLoading
}

