import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);