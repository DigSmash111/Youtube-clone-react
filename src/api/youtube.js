import axios from 'axios';

// the unique API key is from ->
// https://console.developers.google.com/apis/api/youtube.googleapis.com/credentials?project=youtube-app-274810&folder=
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

// the API key is defined in App.js