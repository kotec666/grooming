import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import {
    ICheckUserRes,
    ILoginUserReq,
    ILoginUserRes,
    IRegistrationUserReq,
    IRegistrationUserRes,
} from "../models/IUser"


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/user'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        loginUser: build.mutation<ILoginUserRes, ILoginUserReq>({
            query: (user) => ({
                url: `/login`,
                method: 'POST',
                body: user //login, password
            }),

            invalidatesTags: ['User']
        }),
        registrationUser: build.mutation<IRegistrationUserRes, IRegistrationUserReq>({
            query: (user) => ({
                url: `/registration`,
                method: 'POST',
                body: user //login, password, email, phone, role
            }),
            invalidatesTags: ['User']
        }),
        checkUser: build.query<ICheckUserRes, void>({
            query: () => ({
                url: `/auth`,
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }),
            providesTags: result => ['User']
        }),
    })
})

