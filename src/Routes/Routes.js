import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PlaceDetails from "../components/TravelCategories/PlaceDetails";
import TravelPlace from "../components/TravelCategories/TravelPlaces";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/place',
                element: <TravelPlace></TravelPlace>
            },
            {
                path: '/place/:id',
                element: <PlaceDetails></PlaceDetails>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])