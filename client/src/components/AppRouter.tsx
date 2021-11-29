import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes"
import {HOME_ROUTE} from "../utils/consts"
import React from "react"
import {useAppSelector} from "../hooks/redux"


export const AppRouter = () => {

    const {isAuth} = useAppSelector(state => state.userReducer)

    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => {
               return <Route key={path} path={path} component={Component} exact />
            })}
            {publicRoutes.map(({path, Component}) => {
               return <Route key={path} path={path} component={Component} exact />
            })}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    )
}