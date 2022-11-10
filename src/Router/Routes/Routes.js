import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservices from "../../Pages/Allservices/Allservices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Signup from "../../Pages/Signup/Signup";
import Privateroute from "../PrivateRoute/Privateroute";
import Addservice from "./AddService/Addservice";
import MyReveiws from "./MyReviews/MyReveiws";
import UpdateReview from "./MyReviews/MyReveiws";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/services",
        element: <Allservices></Allservices>,
        loader: () => fetch("http://localhost:5000/allservices"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },

      {
        path: "/myreveiws",
        element: (
          <Privateroute>
            <MyReveiws></MyReveiws>
          </Privateroute>
        ),
      },
      {
        path: "/update",
        element: (
          <UpdateReview></UpdateReview>
        ),
      },
      {
        path: "/addservice",
        element: (
          <Privateroute>
            <Addservice></Addservice>
          </Privateroute>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
]);

export default router;
