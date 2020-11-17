import axios from 'axios'
import {message} from 'ant-design-vue'
import CodeList from "@/utils/Code";
import store from "@/store";

const request = axios.create({
    baseURL: '/api',
    timeout: 6000,
})


//请求拦截器
request.interceptors.request.use(config => {
    const {User} = store.state
    config.headers['X-Csrf-Token'] = User.token
    return config
})


//响应拦截器
request.interceptors.response.use(response => {
        if (response?.status == 200) {
            return response?.data?.statusCode == 200 ? Promise.resolve(response?.data?.data) : message.error(response.data.msg)
        } else {
            return Promise.reject(response)
        }

    }, error => {
        CodeList.some(item => item.code === error?.response?.status ? message.error(item.msg) : '')
    }
)

export default request