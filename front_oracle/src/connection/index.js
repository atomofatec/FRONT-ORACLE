import axios from "axios";

export default function Connection() {
    const url = "http://52.205.252.25:3001/api";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}