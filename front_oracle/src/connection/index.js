import axios from "axios";

export default function Connection() {
    const url = "http://3.83.17.67:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}