import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IBasket} from "../models/IBasket"
import {IBasketToyReq, IBasketToyRes} from "../models/IBasketToy"
import {IBasketServiceReq, IBasketServiceRes} from "../models/IBasketService"


export const basketAPI = createApi({
    reducerPath: 'basketAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Basket'],
    endpoints: (build) => ({
        fetchAllBasketById: build.query<IBasket, number>({
            query: (id: number) => ({
                url: `/basket/${id}`,
            }),
            providesTags: result => ['Basket']
        }),
        createBasketToy: build.mutation<IBasketToyRes, IBasketToyReq>({
            query: (toy) => ({
                url: `/basketToys`,
                method: 'POST',
                body: toy
            }),
            invalidatesTags: ['Basket']
        }),
        createBasketService: build.mutation<IBasketServiceRes, IBasketServiceReq>({
            query: (service) => ({
                url: `/basketServices`,
                method: 'POST',
                body: service
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketToy: build.mutation<IBasketToyRes, IBasketToyReq>({
            query: (toy) => ({
                url: `/basketToys`,
                method: 'DELETE',
                body: toy
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketService: build.mutation<IBasketServiceRes, IBasketServiceReq>({
            query: (service) => ({
                url: `/basketServices`,
                method: 'DELETE',
                body: service
            }),
            invalidatesTags: ['Basket']
        }),
    })
})