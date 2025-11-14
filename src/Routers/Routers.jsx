import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Doctor from "../pages/Doctor/Doctor";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import Bookings from "../pages/Bookings/Bookings";
import CoomingSoon from "../pages/CoomingSoon/CoomingSoon";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:'doctorDetails/:id',
                loader:({params})=>{
                    console.log(params)
                    return params
                },
                Component:DoctorDetails,

            },
            {
                path:'/bookings',
                Component:Bookings
            },
            {
                path:'contact',
                Component:CoomingSoon,
            },
            {
                path:'/login',
                Component:Login,
            },
            {
                path:'/signup',
                Component:SignUp,
            }
        ]
    }
])