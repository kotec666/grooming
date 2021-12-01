import React, {useEffect, useState} from 'react'
import './App.css'
import Navbar from "./components/NavBar/Navbar"
import {AppRouter} from "./components/AppRouter"
import {userAPI} from "./servicesAPI/UserService"
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {basketAPI} from "./servicesAPI/BasketService";


function App() {

    const [loading, setLoading] = useState(true)
    const [loginUser] = userAPI.useLoginUserMutation()

    const {} = userAPI.useCheckUserQuery()
    const {user} = useAppSelector(state => state.userReducer)
    const {} = basketAPI.useFetchAllBasketByIdQuery(user.id)


  return (
    <div className="App">
        <Navbar />
        <AppRouter/>
    </div>
  )
}

export default App
