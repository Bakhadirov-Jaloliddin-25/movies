import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Layout from "../pages/layout/Layout";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "latest", element: <Latest /> },
        { path: "/movie/:id", element: <Detail /> },
      ],
    },
  ]);
};

export default Router;
