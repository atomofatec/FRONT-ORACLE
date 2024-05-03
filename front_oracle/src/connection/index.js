import axios from "axios";

export default function Connection() {
    const url = "http://3.92.132.16:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}