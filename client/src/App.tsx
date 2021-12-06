import React from 'react'
import './App.css'
import Navbar from "./components/NavBar/Navbar"
import {AppRouter} from "./components/AppRouter"
import {userAPI} from "./servicesAPI/UserService"
import {useAppSelector} from "./hooks/redux"
import {basketAPI} from "./servicesAPI/BasketService"
import {orderAPI} from "./servicesAPI/OrderService"


function App() {

    userAPI.useCheckUserQuery(null)
    const {user} = useAppSelector(state => state.userReducer)
    basketAPI.useFetchAllBasketByIdQuery(user.id)
    orderAPI.useFetchAllOrderByIdQuery(user.id)


  return (
    <div className="App">
        <Navbar />
        <AppRouter/>
    </div>
  )
}

export default App
