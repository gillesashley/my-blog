import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ErrorPage from "./components/error-page/error-page.component";
import IndexHome from "./components/home/index-home.component";
import About from "./components/about/about.component";
import BlogList from "./components/blog/bloglist.component";
import BlogPost from "./components/blog/blogpost.component";
import { CssBaseline } from "@mui/material";
import { blogPosts } from "./utils/posts.utils";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <IndexHome />,
      },
      {
        path: "/blog",
        element: <BlogList blogPosts={blogPosts} updateBlogPosts={() => {}} />,
      },
      {
        path: "/blog/:id",
        element: <BlogPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
