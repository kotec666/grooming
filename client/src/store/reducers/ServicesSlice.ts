import {IServices} from "../../models/IServices"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchServices} from "./ActionCreators"


interface ServicesState {
    services: IServices
    isLoading: boolean
    error: string
}


const initialState: ServicesState = {
    services: {count:0, rows:[]},
    isLoading: false,
    error: ''
}


export const servicesSlice = createSlice({
    name:'services',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchServices.fulfilled.type]: (state, action: PayloadAction<IServices>) => {
            state.isLoading = false
            state.error = ''
            state.services = action.payload
        },
        [fetchServices.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchServices.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default servicesSlice.reducer