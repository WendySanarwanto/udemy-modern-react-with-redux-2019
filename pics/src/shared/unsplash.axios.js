import axios from "axios";

const UNSPLASH_ACCESS_KEY = `afb2ebf8e6f6ac775c439307183cf6e0094e686f39664324fa1b9bede37a58b6`;
const UNSPLASH_API_URL = `https://api.unsplash.com`;

export default axios.create({
  baseURL: UNSPLASH_API_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
});