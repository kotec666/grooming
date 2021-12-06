import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IOrder} from "../models/IOrder"
import {IOrderToyReq, IOrderToyRes} from "../models/IOrderToy"
import {IOrderServiceReq, IOrderServiceRes} from "../models/IOrderService"


export const orderAPI = createApi({
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Order'],
    endpoints: (build) => ({
        fetchAllOrderById: build.query<IOrder, number>({
            query: (id: number) => ({
                url: `/order/${id}`, // userId
            }),
            providesTags: result => ['Order']
        }),
        createOrderToy: build.mutation<IOrderToyRes, IOrderToyReq>({
            query: (toy) => ({
                url: `/orderToys`,
                method: 'POST',
                body: toy
            }),
            invalidatesTags: ['Order']
        }),
        createOrderService: build.mutation<IOrderServiceRes, IOrderServiceReq>({
            query: (service) => ({
                url: `/orderServices`,
                method: 'POST',
                body: service
            }),
            invalidatesTags: ['Order']
        }),
        deleteOrderToy: build.mutation<IOrderToyRes, IOrderToyReq>({
            query: (toy) => ({
                url: `/orderToys`,
                method: 'DELETE',
                body: toy
            }),
            invalidatesTags: ['Order']
        }),
        deleteOrderService: build.mutation<IOrderServiceRes, IOrderServiceReq>({
            query: (service) => ({
                url: `/orderServices`,
                method: 'DELETE',
                body: service
            }),
            invalidatesTags: ['Order']
        }),
    })
})