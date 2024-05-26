import axios from "axios";

export default function Connection() {
    const url = "http://18.205.157.157:3001/api/";

    const conn = axios.create({
        baseURL: url,
    });

    return conn;
}