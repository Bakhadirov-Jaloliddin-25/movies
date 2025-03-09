import React from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "./index.css";

const App = () => {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
};

export default App;
