import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {IServices, IType} from "../models/IServices"


export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Service'],
    endpoints: (build) => ({
        fetchAllServices: build.query<IServices, number>({
            query: (limit: number = 3) => ({
                url: `/type`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Service']
        }),
        createType: build.mutation<IType, IType>({
            query: (type) => ({
                url: `/type`,
                method: 'POST',
                body: type
            }),
            invalidatesTags: ['Service']
        }),
        deleteType: build.mutation<IType, IType>({
            query: (type) => ({
                url: `/type/${type.id}`,
                method: 'DELETE',
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