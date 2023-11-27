import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import OurTrainers from "../Pages/OurTrainers/OurTrainers";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Classes from "../Pages/Classes/Classes";
import Forum from "../Pages/Forum/Forum";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: 'trainers',
            element: <OurTrainers></OurTrainers>
        },
        {
            path: 'gallery',
            element: <GalleryPage></GalleryPage>
            
        },
        {
            path: 'classes',
            element: <Classes></Classes>
            
        },
        {
            path: 'forum',
            element: <Forum></Forum>
            
        },
        {
            path: 'login',
            element: <LoginPage></LoginPage>
        },
        {
            path: 'register',
            element: <RegisterPage></RegisterPage>
        },
        {
            path: 'trainers/:id',
            element: <TrainerDetails></TrainerDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/trainers/${params.id}`)
        },
      ]
    },
  ]);