import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/DashboardLayout";
import Main from "../layouts/Main";
import CategoryPage from "../pages/CategoryPage";
import AllBuyers from "../pages/Dashboard/AdminPanel/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AdminPanel/AllSellers/AllSellers";
import AddProduct from "../pages/Dashboard/SellerPanel/AddProduct";
import ManageProducts from "../pages/Dashboard/SellerPanel/ManageProduct/ManageProducts";
import MyOrders from "../pages/Dashboard/UserPanel/MyOrders/MyOrders";
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
                path:'/categories',
                element:<CategoryPage />
            },
            {
                path:'/category/:id',
               loader:({params})=>fetch(`${process.env.REACT_APP_api}/category/${params.id}`),
                element:<PrivateRoute><SingleProduct /></PrivateRoute>
            },
           
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard /></PrivateRoute>,
        children:[
            {
                path:'/dashboard/my-orders',
                element:<MyOrders />
            },
            {
                path:'/dashboard/add-product',
                element:<AddProduct />
            },
            {
                path:'/dashboard/manage-products',
                element:<ManageProducts />

            },
            {
                path:'/dashboard/all-buyers',
                element:<AllBuyers />

            },
            {
                path:'/dashboard/all-sellers',
                element:<AllSellers />

            },
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