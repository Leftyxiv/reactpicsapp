import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID BrG9PfJbwPPxKbo0o6LlLHjlIbCDfB44oMd8vZ6FI0s",
  },
})