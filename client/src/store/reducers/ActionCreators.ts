import axios from "axios"
import {IServices} from "../../models/IServices"
import {createAsyncThunk} from "@reduxjs/toolkit"
import {IToys} from "../../models/IToys"
import {IBasket} from "../../models/IBasket"

// import {servicesSlice} from "./ServicesSlice"
// import {AppDispatch} from "../store"


// export const fetchServices = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(servicesSlice.actions.servicesFetching())
//         const response = await axios.get<IServices>(`http://localhost:5000/api/type`)
//         dispatch(servicesSlice.actions.servicesFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(servicesSlice.actions.servicesFetchingError(e.message))
//     }
// }


 export const fetchServices = createAsyncThunk(
     'service/fetchAll',
     async (_, thunkAPI) => {
        try {
            const response = await axios.get<IServices>(`http://localhost:5000/api/type`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить услуги')
        }
     }
 )




export const fetchToys = createAsyncThunk(
    'toy/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IToys>(`http://localhost:5000/api/toy`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить игрушки')
        }
    }
)



export const fetchBasket = createAsyncThunk(
    'basket/fetchAllById',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IBasket>(`http://localhost:5000/api/basket/`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить корзину')
        }
    }
)