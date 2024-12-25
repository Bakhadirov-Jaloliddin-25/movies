import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-gray-800 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-center mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
