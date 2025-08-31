import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Register from '../views/Register'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import AboutUs from '../views/AboutUs'
import ContactUs from '../views/ContactUs'
import Detail from '../views/Detail'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/contactUs",
        element: <ContactUs />,
    },
    {
        path: "/aboutUs",
        element: <AboutUs />,
    },
    {
        path: "/detail/:adId",
        element: <Detail />,
    },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router

/*
 Redux:
 A global state management library that has the realtime feature.

 Difference with localStorage:
 Localstorage has non realtime approach.
*/