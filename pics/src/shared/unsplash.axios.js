import axios from "axios";

const UNSPLASH_ACCESS_KEY = `${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
console.log(`UNSPLASH_ACCESS_KEY = ${UNSPLASH_ACCESS_KEY}`);
const UNSPLASH_API_URL = `https://api.unsplash.com`;

export default axios.create({
  baseURL: UNSPLASH_API_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
});