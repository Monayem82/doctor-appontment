import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Doctor from "../pages/Doctor/Doctor";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";

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

            }
        ]
    }
])