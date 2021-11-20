import {combineReducers, configureStore} from "@reduxjs/toolkit"
import servicesReducer from "./reducers/ServicesSlice"
import {serviceAPI} from "../servicesAPI/TypeService"
import {toyAPI} from "../servicesAPI/ToysService";
import {basketAPI} from "../servicesAPI/BasketService"


const rootReducer = combineReducers({
    servicesReducer,
    [serviceAPI.reducerPath]: serviceAPI.reducer,
    [toyAPI.reducerPath]: toyAPI.reducer,
    [basketAPI.reducerPath]: basketAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(serviceAPI.middleware, toyAPI.middleware, basketAPI.middleware))
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']