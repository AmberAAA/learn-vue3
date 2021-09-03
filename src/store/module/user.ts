import { Module } from "vuex";

export interface UserInfo {
    name: string,
    age: number | null,
    email: string
    address: string
}

export interface UserState {
    userInfo: UserInfo | null
}

export enum UserMutations {
    SET_USER_INFO = "SET_USER_INFO",
}

export enum UserActions {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

export const userModule :Module<UserState, {}> = {
    state () {
        return {
            userInfo: null
        }
    },
    mutations: {
        [UserMutations.SET_USER_INFO] (state, payload) {
            state.userInfo = payload
        }
    },
    actions: {
        [UserActions.LOGIN] ({ commit }, payload) {
            commit(UserMutations.SET_USER_INFO, payload)
            console.log(payload)
        }
    }
}