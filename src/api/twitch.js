import axios from 'axios'

//AXIOS INSTANCE
const axiosTwitch = axios.create({
    baseURL: 'https://api.twitch.tv/helix'
})
export const getUser = () => axiosTwitch(`/users`).then(res => res.data.data)

export const getUsers = (id = '') => axiosTwitch(`/users?id=${id}`).then(res => res.data.data)

export const getLiveFollowed = (id = '') => axiosTwitch(`/streams/followed?user_id=${id}&first=5`).then(res => res.data.data)

export const getStreams = (user_id = '') => {
    return axiosTwitch(`/streams?user_id=${user_id}`).then(res => res.data.data)
}

export const searchChannels = (query = '', cancel) => axiosTwitch(`/search/channels?query=${query}`, {
    cancelToken: new axios.CancelToken(c => cancel.cancel = c)
}).then(res => res.data.data)

export const searchCategories = (query = '', cancel) => axiosTwitch(`/search/categories?query=${query}`, {
    cancelToken: new axios.CancelToken(c => cancel.cancel = c)
}).then(res => res.data.data)

export const getUserFollows = (from_id = '') => axiosTwitch.get(`/users/follows?from_id=${from_id}`).then(res => res.data.data)

export const getCategories = (number = '') => axiosTwitch.get(`/games/top?first=${number}`).then(res => res.data.data)

export const getCategoriesById = (id = '') => axiosTwitch.get(`/games?id=${id}`).then(res => res.data.data)

export const getStreamFromCategories = (id_categ = '', first = 20) => axiosTwitch.get(`streams?game_id=${id_categ}&first=${first}`).then(res => res.data.data)

export const getVideos = (number = 5) => axiosTwitch.get(`streams?first=${number}`).then(res => res.data.data)

export const getClips = (id = '') => axiosTwitch.get(`/videos?game_id=${id}`).then(res => res.data.data)


//AXIOS interceptors
axiosTwitch.interceptors.request.use(config => {
    //console.log(config.headers)
    config.headers = {
        "Client-ID": 'nyo5pswxpqg5vuok232i6mluzmg4x7', //cambia
        "Authorization": "Bearer " + sessionStorage.getItem('token')  //cambia in token
    }
    return config
},
    error => {
        return Promise.reject(error)
    }
)