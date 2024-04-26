import axios from "axios";

export default function Connection() {
    const url = "http://3.95.19.223:3001/api";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}