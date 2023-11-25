import axios from "axios";

const MyAxios = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
    }
});


export default MyAxios