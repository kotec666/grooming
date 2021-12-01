import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchToys} from "./ActionCreators"
import {IToys} from "../../models/IToys"


interface ToysState {
    toys: IToys
    isLoading: boolean
    error: string
}


const initialState: ToysState = {
    toys: {count:0, rows:[]},
    isLoading: false,
    error: '',
}


export const toysSlice = createSlice({
    name:'toys',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchToys.fulfilled.type]: (state, action: PayloadAction<IToys>) => {
            state.isLoading = false
            state.error = ''
            state.toys = action.payload
        },
        [fetchToys.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchToys.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default toysSlice.reducer