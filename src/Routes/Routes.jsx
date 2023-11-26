import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import OurTrainers from "../Pages/OurTrainers/OurTrainers";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";

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
            path: 'trainers/:id',
            element: <TrainerDetails></TrainerDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/trainers/${params.id}`)
        },
      ]
    },
  ]);