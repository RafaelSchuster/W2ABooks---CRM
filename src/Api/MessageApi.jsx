import axios from 'axios';

const serverUrl = '';

export function getMsg() {
    return axios.get(`${serverUrl}/___`);
}

export function createMsg(msg) {
    return axios.post(`${serverUrl}/___`, msg);
}