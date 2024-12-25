import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Layout from "../pages/layout/Layout";
import Detail from "../pages/detail/Detail";
import Movie from "../pages/movies/Movie";
import Saved from "../pages/saved/Saved";
import Search from "../pages/search/Search";
import NotFoundPage from "../pages/notfound/Notfound";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "latest", element: <Latest /> },
        { path: "/movie/:id", element: <Detail /> },
        { path: "/movie", element: <Movie /> },
        { path: "/saved", element: <Saved /> },
        { path: "/search", element: <Search /> },
      ],
    },
    { path: "/*", element: <NotFoundPage /> },
  ]);
};

export default Router;
