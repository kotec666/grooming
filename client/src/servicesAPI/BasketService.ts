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
            query: (id: number = 3) => ({
                url: `/basket/${id}`,
            }),
            providesTags: result => ['Basket']
        }),
        createBasketToy: build.mutation<IBasketToyReq, IBasketToyRes>({
            query: (toy) => ({
                url: `/basketToys`,
                method: 'POST',
                body: toy
            }),
            invalidatesTags: ['Basket']
        }),
        createBasketService: build.mutation<IBasketServiceReq, IBasketServiceRes>({
            query: (service) => ({
                url: `/basketServices`,
                method: 'POST',
                body: service
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketToy: build.mutation<IBasketToyRes, IBasketToyRes>({
            query: (toy) => ({
                url: `/basketToys`,
                method: 'DELETE',
                body: toy //toy_id, basket_id
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketService: build.mutation<IBasketServiceReq, IBasketServiceRes>({
            query: (service) => ({
                url: `/basketServices`,
                method: 'DELETE',
                body: service //service_id, basket_id
            }),
            invalidatesTags: ['Basket']
        }),
    })
})