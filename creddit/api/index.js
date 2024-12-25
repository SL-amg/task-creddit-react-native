import axios from 'axios';

const instance = axios.create({
    basURL: "https://api-creddit.eapi.joincoded.com/",
  });
  
  instance.interceptors.response.use((response) => {
    return response.data;
  });

  export default instance;