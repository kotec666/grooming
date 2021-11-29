import {combineReducers, configureStore} from "@reduxjs/toolkit"
import servicesReducer from "./reducers/ServicesSlice"
import userReducer from "./reducers/UserSlice"
import {serviceAPI} from "../servicesAPI/TypeService"
import {toyAPI} from "../servicesAPI/ToysService"
import {basketAPI} from "../servicesAPI/BasketService"
import {userAPI} from "../servicesAPI/UserService"


const rootReducer = combineReducers({
    servicesReducer,
    userReducer,
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    [toyAPI.reducerPath]: toyAPI.reducer,
    [basketAPI.reducerPath]: basketAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(serviceAPI.middleware, toyAPI.middleware, basketAPI.middleware, userAPI.middleware))
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']