import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IToys, IToy} from "../models/IToys"



export const toyAPI = createApi({
    reducerPath: 'toyAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Toys'],
    endpoints: (build) => ({
        fetchAllToys: build.query<IToys, {limit: number; page:number}>({
            query: ({limit, page}) => `toy/?_limit=${limit}&page=${page}`,
            providesTags: result => ['Toys']
        }),
        createToy: build.mutation<IToy, FormData>({
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
        deleteToy: build.mutation<IToy, number>({
            query: (toyId) => ({
                url: `/toy/${toyId}`,
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Toys']
        }),
    })
})