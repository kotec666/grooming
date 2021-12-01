import {createSlice} from "@reduxjs/toolkit"
import {IUser} from "../../models/IUser"
import jwt_decode from "jwt-decode"
import {userAPI} from "../../servicesAPI/UserService"


interface UserState {
    user: IUser
    isLoading: boolean
    error: string,
    isAuth: boolean
    token: string
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
    // extraReducers: {
    //     [fetchUser.fulfilled.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false
    //         state.error = ''
    //         state.isAuth = true
    //       // state.user = action.payload
    //         state.token = action.payload
    //
    //     },
    //     [fetchUser.pending.type]: (state) => {
    //         state.isLoading = true
    //     },
    //     [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false
    //         state.error = action.payload
    //         state.isAuth = false
    //     },
    // }
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
                state.isAuth = true
                // @ts-ignore
                state.token = payload.token
                // @ts-ignore
                state.user = jwt_decode(payload.token)
                // @ts-ignore
                localStorage.setItem('token', payload.token)
            }
        )

    },
})

export const {clearUser} = userSlice.actions
export default userSlice.reducer