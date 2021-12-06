import {createSlice} from "@reduxjs/toolkit"
import {IOrder} from "../../models/IOrder"
import {orderAPI} from "../../servicesAPI/OrderService"


interface OrderState {
    order: IOrder
    isLoading: boolean
    error: string
}


const initialState: OrderState = {
    order: {id:0, userId: 0, services: [], toys: [], createdAt: '' , updatedAt: ''},
    isLoading: false,
    error: ''
}


export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            orderAPI.endpoints.fetchAllOrderById.matchFulfilled,
            (state, { payload }) => {
                state.isLoading = false
                state.error = ''
                state.order = payload
            }
        )
    },
})


export default orderSlice.reducer