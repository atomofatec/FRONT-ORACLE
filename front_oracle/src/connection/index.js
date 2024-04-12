import axios from "axios";

export default function Connection() {
    const url = "http://54.152.25.106:3001/api";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}