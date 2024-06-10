import axios from "axios";

export default function Connection() {
    const url = "http://54.162.78.17:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}