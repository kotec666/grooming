import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {ICreateTypeReq, ICreateTypeRes, IServices, IServicesData, IServicesDataReq, IType} from "../models/IServices"


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
        deleteType: build.mutation<IType, IType>({
            query: (type) => ({
                url: `/type/${type.id}`,
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
        deleteService: build.mutation<IServicesData, IServicesData>({
            query: (service) => ({
                url: `/service/${service.id}`,
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            invalidatesTags: ['Service']
        }),
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts`,
        //         method: 'POST',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // updatePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'PUT',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // deletePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Post']
        // }),
    })
})