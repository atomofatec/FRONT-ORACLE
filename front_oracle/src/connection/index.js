import axios from "axios";

export default function Connection() {
    const url = "http://52.87.158.171:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}