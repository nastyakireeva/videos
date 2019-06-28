import axios from 'axios';

const KEY = 'AIzaSyDwYA-SwZq2d7SutBxOn7tjBzc4WIua5-Y';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});

