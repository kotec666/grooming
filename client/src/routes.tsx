import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import ToysPage from "./pages/ToysPage/ToysPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import CartPage from "./pages/CartPage/CartPage"
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CART_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SERVICES_ROUTE, TOYS_ROUTE
} from "./utils/consts"
import AboutPage from "./pages/AboutPage/AboutPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
]


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    {
        path: TOYS_ROUTE,
        Component: ToysPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
]

