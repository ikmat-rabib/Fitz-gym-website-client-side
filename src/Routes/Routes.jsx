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
import PrivateRoute from "./PrivateRoute";
import BeTrainerPage from "../Pages/BecomeTrainer/BeTrainerPage";
import BlogPostPage from "../Pages/BlogPostPage/BlogPostPage";
import Booking from "../Pages/Booking/Booking";
import Payment from "../Pages/Payment/Payment";
import ClassDetailPage from "../Pages/ClassDetailPage/ClassDetailPage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllSubscriber from "../Pages/Dashboard/AllSubscriber/AllSubscriber";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";

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
        path: 'classes/:id',
        element: <ClassDetailPage></ClassDetailPage>,
        loader: ({ params }) => fetch(`https://assignment-12-server-seven-neon.vercel.app/classes/${params.id}`)
      },
      {
        path: 'forum',
        element: <Forum></Forum>,
        loader: () => fetch('https://assignment-12-server-seven-neon.vercel.app/blogCount')
      },
      {
        path: 'blogs/:id',
        element: <BlogPostPage></BlogPostPage>,
        loader: ({ params }) => fetch(`https://assignment-12-server-seven-neon.vercel.app/blogs/${params.id}`)
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
        loader: ({ params }) => fetch(`https://assignment-12-server-seven-neon.vercel.app/trainers/${params.id}`)
      },
      {
        path: 'be-trainer',
        element: <PrivateRoute><BeTrainerPage></BeTrainerPage></PrivateRoute>
      },
      {
        path: 'booking',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: 'payment',
        element: <PrivateRoute> <Payment></Payment> </PrivateRoute>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    children: [
      {
        path: "/dashboard/allSubacriber",
        element: <AllSubscriber></AllSubscriber>
      },
      {
        path: "/dashboard/allTrainers",
        element: <AllTrainers></AllTrainers>
      },
      {
        path: "/dashboard/appliedTrainers",
        element: <AllSubscriber></AllSubscriber>
      },
      {
        path: "/dashboard/balance",
        element: <AllSubscriber></AllSubscriber>
      },
    ]
  }
]);