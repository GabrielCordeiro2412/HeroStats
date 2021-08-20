import axios from 'axios';

const api = axios.create({
    baseURL: 'https://superheroapi.com'
})

export default api;