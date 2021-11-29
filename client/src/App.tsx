import React, {useState} from 'react'
import './App.css'
import Navbar from "./components/NavBar/Navbar"
import {AppRouter} from "./components/AppRouter"
import {userAPI} from "./servicesAPI/UserService"


function App() {
  //  const {token, user} = useAppSelector(state => state.userReducer)
    const [loading, setLoading] = useState(true)
    const [loginUser] = userAPI.useLoginUserMutation()

    const {} = userAPI.useCheckUserQuery()

  return (
    <div className="App">
        <Navbar />
        <AppRouter/>
    </div>
  )
}

export default App
