import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Data from "./data.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componaints/home.jsx";
import Footer from "./componaints/footer.jsx";
import Courses from "./all_page/Courses.jsx";
import Projects from "./all_page/projects.jsx";
import Help from "./all_page/Help.jsx";
import Video from "./video.jsx";
import Commingsoon from "./componaints/commingsoon.jsx";
import Aboutus from "./all_page/aboutus.jsx";
import Page from "./all_page/Page.jsx";
import Blog from "./all_page/Blog.jsx";
import Blogdata from "./all_page/blogdata.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/index",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/main",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  {
    path: "/Courses/Help",
    element: <Help />,
  },
  {
    path: "/Projects/Help",
    element: <Help />,
  },
  {
    path: "/Help/Aboutus/Help",
    element: <Help />,
  },
  {
    path: "/page/Help",
    element: <Help />,
  },
  {
    path: "/index/page/Help",
    element: <Help />,
  },
  {
    path: "/index/Help",
    element: <Help />,
  },
  {
    path: "/main/Help",
    element: <Help />,
  },
  {
    path: "/home/Help",
    element: <Help />,
  },
  {
    path: "/blog/Help",
    element: <Help />,
  },
  {
    path: "/video",
    element: <Commingsoon />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Help/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Courses/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Blog",
    element: <Blogdata />,
  },
  {
    path: "/page",
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
