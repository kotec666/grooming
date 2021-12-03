import {createSlice} from "@reduxjs/toolkit"
import {IUser} from "../../models/IUser"
import jwt_decode from "jwt-decode"
import {userAPI} from "../../servicesAPI/UserService"


interface UserState {
    user: IUser | {id: 0, login: '', email: '', phone: '', role: ''}
    isLoading: boolean
    error: string,
    isAuth: boolean
    token: string | null
}


const initialState: UserState = {
    user: {id: 0, login: '', email: '', phone: '', role: ''},
    isLoading: false,
    error: '',
    isAuth: false,
    token: ''
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        clearUser(state) {
            state.user = {id: 0, login: '', email: '', phone: '', role: ''}
            state.isLoading = false
            state.error = ''
            state.isAuth = false
            state.token = ''
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userAPI.endpoints.loginUser.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token
                state.user = jwt_decode(payload.token)
                state.isAuth = true
                localStorage.setItem('token', payload.token)
            }
        )
        builder.addMatcher(
            userAPI.endpoints.checkUser.matchFulfilled,
            (state, { payload }) => {
                state.isAuth = payload !== null
                state.token = payload !== null ? payload.token : ''
                state.user = payload !== null ? payload.token ? jwt_decode(payload.token) : {id: 0, login: '', email: '', phone: '', role: ''} : {id: 0, login: '', email: '', phone: '', role: ''}
                localStorage.setItem('token', payload !== null ? payload.token ? payload.token : '' : '')
            }
        )

    },
})

export const {clearUser} = userSlice.actions
export default userSlice.reducer