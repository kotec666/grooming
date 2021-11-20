import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IBasket} from "../models/IBasket"
import {IBasketToy} from "../models/IBasketToy"
import {IBasketService} from "../models/IBasketService"


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
        createBasketToy: build.mutation<IBasketToy, IBasketToy>({
            query: (toy) => ({
                url: `/basketToys`,
                method: 'POST',
                body: toy
            }),
            invalidatesTags: ['Basket']
        }),
        createBasketService: build.mutation<IBasketService, IBasketService>({
            query: (service) => ({
                url: `/basketServices`,
                method: 'POST',
                body: service
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketToy: build.mutation<IBasketToy, IBasketToy>({
            query: (toy) => ({
                url: `/basketToys/${toy.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Basket']
        }),
        deleteBasketService: build.mutation<IBasketService, IBasketService>({
            query: (service) => ({
                url: `/basketServices/${service.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Basket']
        }),
    })
})