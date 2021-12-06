import axios from "axios"
import {IServices} from "../../models/IServices"
import {createAsyncThunk} from "@reduxjs/toolkit"
import {IToys} from "../../models/IToys"



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


