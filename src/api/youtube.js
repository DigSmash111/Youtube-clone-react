import axios from 'axios';
import url from './key';

// the unique API key is from ->
// https://console.developers.google.com/apis/api/youtube.googleapis.com/credentials?project=youtube-app-274810&folder=
export default axios.create({
    baseURL: url,
});

// the API key is defined in App.js
