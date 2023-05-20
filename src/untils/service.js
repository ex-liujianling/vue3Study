import axios from "axios";
import { Promise } from "core-js";
import { Message } from "element-ui";
const service = axios.create({
    baseURL: '/api',
    timeout: 3000
})
service.interceptors.request.use((config) => {
    config.headers['token'] = sessionStorage.getItem('token') || 'fsfesfes'
    return config
}, err => {
    console.info('请求拦截器', err)
    return Promise.reject(err)
})
service.interceptors.response.use(response => {
    let { status, message } = response.data
    if (status !== 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response
}, err => {
    console.info('响应拦截器', err)
    return Promise.reject(err)
})
export default service