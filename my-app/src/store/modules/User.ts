import {Module} from "vuex";

const state = {
    token: sessionStorage.getItem('token') ?? '',
    userInfo: sessionStorage.getItem('userInfo') ?? ''
}


const mutations = {
    setToken(state: IUser, token: string) {
        state.token = token
        sessionStorage.setItem('token', token)

    },
    removeToken(state: IUser) {
        state.token = ''
        sessionStorage.removeItem('token')
    },
    removeUser(state: IUser) {
        state.userInfo = ''
        sessionStorage.removeItem('userInfo')
    },
    setUser(state: IUser, userInfo: string) {
        state.userInfo = userInfo
        sessionStorage.setItem('userInfo', userInfo)
    },

}
const actions = {}

import {IUser, IRootState} from '@/types/store'

const Model: Module<IUser, IRootState> = {
    state,
    mutations,
    actions
}
export default {
    namespaced: true,
    ...Model
}