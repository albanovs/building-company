import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://building-server.onrender.com',
})