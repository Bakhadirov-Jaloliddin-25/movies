import React from "react";
import { Outlet } from "react-router-dom";

const Latest = () => {
  return (
    <div>
      <h2>Latest</h2>
      <Outlet />
    </div>
  );
};

export default Latest;
