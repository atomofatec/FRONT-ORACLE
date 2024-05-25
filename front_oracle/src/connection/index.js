import axios from "axios";

export default function Connection() {
    const url = "http://3.88.196.217:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}