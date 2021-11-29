import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID QguwxKHSaBPr5ApLgSXOS6XdfcM6KYGZvr-2nlqAf7k",
  },
});
