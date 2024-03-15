// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios, {AxiosInstance } from 'axios';

console.log(import.meta.env.CURRENCY_API_KEY);

// Create an Axios instance with your base URL and timeout
const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.CURRENCY_API_URL,
    timeout: 1000,
});

// Add a request interceptor to modify outgoing requests
instance.interceptors.request.use((config) => {
    // Add 'apikey' parameter to each request
    config.params = {...config.params, apikey: import.meta.env.VITE_CURRENCY_API_KEY}
    return config
}, (error) => {
    // Handle errors here
    return Promise.reject(error);
});

// Export a function to fetch data using the modified Axios instance
export default (url: string) => instance.get(url).then(res => res.data);
