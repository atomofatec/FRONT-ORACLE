import axios from "axios";

export default function Connection() {
    const url = "http://54.174.75.95:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}