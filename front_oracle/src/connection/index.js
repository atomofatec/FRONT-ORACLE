import axios from "axios";

export default function Connection() {
    const url = "http://34.201.252.253:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}