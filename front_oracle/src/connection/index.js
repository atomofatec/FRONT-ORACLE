import axios from "axios";

export default function Connection() {
    const url = "http://44.211.191.103:3001/api";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}