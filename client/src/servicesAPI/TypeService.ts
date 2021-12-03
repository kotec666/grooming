import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {
    ICreateTypeReq,
    ICreateTypeRes,
    IServices,
    IServicesData,
    IServicesDataReq,
    IType
} from "../models/IServices"


export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Service'],
    endpoints: (build) => ({
        fetchAllServices: build.query<IServices, { limit: number, page: number }>({
            query: ({limit, page}) => `type/?_limit=${limit}&page=${page}`,
            providesTags: result => ['Service']
        }),
        createType: build.mutation<ICreateTypeRes, ICreateTypeReq>({
            query: (type) => ({
                url: `/type`,
                method: 'POST',
                body: type,
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Service']
        }),
        deleteType: build.mutation<IType, number>({
            query: (typeId) => ({
                url: `/type/${typeId}`,
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Service']
        }),
        createService: build.mutation<IServicesData, IServicesDataReq>({
            query: (service) => ({
                url: `/service`,
                method: 'POST',
                body: service,
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Service']
        }),
        deleteService: build.mutation<IServicesData, number>({
            query: (serviceId) => ({
                url: `/service/${serviceId}`,
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Service']
        }),
    })
})