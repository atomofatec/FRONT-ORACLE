import axios from "axios";

export default function Connection() {
    const url = "http://18.205.163.14:3001/api";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}