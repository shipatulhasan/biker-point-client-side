import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/DashboardLayout";
import Main from "../layouts/Main";
import AddProduct from "../pages/Dashboard/SellerPanel/AddProduct";
import ManageProducts from "../pages/Dashboard/SellerPanel/ManageProduct/ManageProducts";
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
                path:'/category/:id',
                loader:({params})=> fetch(`${process.env.REACT_APP_api}/category/${params.id}`),
                element:<PrivateRoute><SingleProduct /></PrivateRoute>
            },
           
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard /></PrivateRoute>,
        children:[
            {
                path:'/dashboard/add-product',
                element:<AddProduct />
            },
            {
                path:'/dashboard/manage-products',
                element:<ManageProducts />

            }
        ]
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