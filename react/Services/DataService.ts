import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer yourtokenhere' }
});

function service() {


    return apiClient;
}

export default service;