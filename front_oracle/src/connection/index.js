import axios from 'axios';

export default function Connection() {
    const url = 'http://54.145.244.191:3001/api';

    const conn = axios.create({
        baseURL: url
    })

    return conn;
}