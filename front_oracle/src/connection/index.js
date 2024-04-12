import axios from 'axios';

export default function Connection() {
    const url = 'http://35.174.105.229:3001/api';

    const conn = axios.create({
        baseURL: url
    })

    return conn;
}