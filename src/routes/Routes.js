import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main";
import Login from "../pages/Forms/Login";
import Registration from "../pages/Forms/Registration";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import PrivateRoute from '../routes/PrivateRoute'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/single-product',
                element:<SingleProduct />
            },
           
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard /></PrivateRoute>
    },
    {
        path:'/registration',
        element:<Registration />
    },
    {
        path:'/login',
        element:<Login />
    },
])

export default router;