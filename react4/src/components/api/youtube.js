import axios from "axios";

const KEY = 'AIzaSyCH0EGDk3EadgYjcGuDbjDfIweI0-bD6uA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY,
    }
})