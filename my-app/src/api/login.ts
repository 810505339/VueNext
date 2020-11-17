import request from "../utils/request";
import store from '@/store'


const Api = {
    login: 'login/login'
}

interface loginInterface {
    pass_word: string,
    user_name: string
}

//登录接口
export async function loginApi(data: loginInterface) {


    return request.post(Api.login, data).then(res => {
        const {token}: any = res
        const user = decodeURIComponent(escape(window.atob(token.split('.')[1])))
        store.commit('User/setToken', token ?? '')
        store.commit('User/setUser', user ?? '')
        return res
    }).catch(e => {
    })
}