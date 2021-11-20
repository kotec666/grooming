import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchBasket} from "./ActionCreators"
import {IBasket} from "../../models/IBasket"


interface BasketState {
    basket: IBasket
    isLoading: boolean
    error: string
}


const initialState: BasketState = {
    basket: {id:1, userId: 1, services: [], toys: [], createdAt: '' , updatedAt: ''},
    isLoading: false,
    error: ''
}


export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBasket.fulfilled.type]: (state, action: PayloadAction<IBasket>) => {
            state.isLoading = false
            state.error = ''
            state.basket = action.payload
        },
        [fetchBasket.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchBasket.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default basketSlice.reducer