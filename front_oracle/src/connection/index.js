import axios from "axios";

export default function Connection() {
    const url = "http://18.207.190.78:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}