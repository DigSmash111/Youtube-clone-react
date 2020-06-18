import axios from 'axios';
import url from './key';

export default axios.create({
    baseURL: url,
});

// the API key is defined in App.js
