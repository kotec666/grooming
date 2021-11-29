import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IToys, IToy, ICreateToyReq} from "../models/IToys"


export const toyAPI = createApi({
    reducerPath: 'toyAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Toys'],
    endpoints: (build) => ({
        fetchAllToys: build.query<IToys, number>({
            query: (limit: number = 6) => ({
                url: `/toy`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Toys']
        }),
        createToy: build.mutation<IToy, ICreateToyReq>({
            query: (toy) => ({
                url: `/toy`,
                method: 'POST',
                body: toy, //form data
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Toys']
        }),
        deleteToy: build.mutation<IToy, IToy>({
            query: (toy) => ({
                url: `/toy/${toy.id}`,
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Toys']
        }),
    })
})