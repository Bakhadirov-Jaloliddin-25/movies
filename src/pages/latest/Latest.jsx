import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Latest = () => {
  return (
    <div>
      <Helmet>
        <title>Latest</title>
      </Helmet>
      <h2 className="text-center">Latest</h2>
      <Outlet />
    </div>
  );
};

export default Latest;
