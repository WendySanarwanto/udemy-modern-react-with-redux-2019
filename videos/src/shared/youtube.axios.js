import axios from "axios";

const YOUTUBE_ACCESS_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3`;
const MAX_RESULTS = 5;

export default axios.create({
  baseURL: YOUTUBE_API_URL,
  params: {
    part: 'snippet',
    maxResults: MAX_RESULTS,
    key: YOUTUBE_ACCESS_KEY
  }
});
