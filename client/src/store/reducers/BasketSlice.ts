import {createSlice} from "@reduxjs/toolkit"
import {IBasket} from "../../models/IBasket"
import {basketAPI} from "../../servicesAPI/BasketService"


interface BasketState {
    basket: IBasket
    isLoading: boolean
    error: string
}


const initialState: BasketState = {
    basket: {id:0, userId: 0, services: [], toys: [], createdAt: '' , updatedAt: ''},
    isLoading: false,
    error: ''
}


export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            basketAPI.endpoints.fetchAllBasketById.matchFulfilled,
            (state, { payload }) => {
                state.isLoading = false
                state.error = ''
                state.basket = payload
            }
        )
    },
})


export default basketSlice.reducer