import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from "./components/NavBar/Navbar"
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Services from './pages/Services/Services'
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import ToysPage from './pages/ToysPage/ToysPage'
import CartPage from './pages/CartPage/CartPage'
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import AdminPage from "./pages/AdminPage/AdminPage"


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route path={'/'} exact>
                <Home />
            </Route>
            <Route path={'/services'} exact>
                <Services />
            </Route>
            <Route path={'/toys'} exact>
                <ToysPage />
            </Route>
            <Route path={'/cart'} exact>
                <CartPage />
            </Route>
            <Route path={'/profile'} exact>
                <ProfilePage />
            </Route>
            <Route path={'/admin'} exact>
                <AdminPage />
            </Route>
            <Route path={'/login'} exact>
                <LoginPage />
            </Route>
            <Route path={'/registration'} exact>
                <RegistrationPage />
            </Route>
        </Switch>
    </div>
  )
}

export default App
