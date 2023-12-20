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
import BlogList from "./components/blog/blog-list.component";
import BlogPostDetail from "./components/blog/blog-post-detail.component";
import { CssBaseline } from "@mui/material";
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
        element: <BlogList />,
      },
      {
        path: "/blog/:id",
        element: <BlogPostDetail />,
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
