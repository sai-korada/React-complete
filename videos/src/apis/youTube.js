import axios from "axios";

const KEY = "AIzaSyAWhGR4UEdk44RD-yxK3Mmd0DCnr2maUAY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
