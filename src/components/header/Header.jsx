import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo.svg";
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";

const lang = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Ру",
    value: "ru",
  },
  {
    label: "Uz",
    value: "uzb",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } sticky top-0 left-0 z-10 duration-300`}
    >
      <div className="container flex flex-wrap items-center justify-around py-5">
        <div className="w-[112px] h-[36px] select-none hover:brightness-75 duration-150">
          <img
            onClick={() => navigate("/")}
            className="w-full h-full cursor-pointer"
            src={logo}
            alt="logo"
          />
        </div>
        <ul className="flex w-[250px] flex-wrap justify-between max-[650px]:fixed max-[650px]:bottom-0 max-[650px]:left-0 max-[650px]:bg-white max-[650px]:dark:bg-black max-[650px]:w-full max-[650px]:justify-evenly">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:gap-0 max-[650px]:py-1 max-[650px]:text-[12px] hover:text-red-600 duration-150">
              <GoHome className="text-2xl" />
              <span className="">Home</span>
            </li>
          </NavLink>
          <NavLink
            to={"/movie"}
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:gap-0 max-[650px]:py-1 max-[650px]:text-[12px] hover:text-red-600 duration-150">
              <RiMovieLine className="text-2xl" />
              <span>Movies</span>
            </li>
          </NavLink>
          <NavLink
            to={"/saved"}
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:gap-0 max-[650px]:py-1 max-[650px]:text-[12px] hover:text-red-600 duration-150">
              <IoBookmarkOutline className="text-2xl" />
              <span>Saved</span>
            </li>
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:gap-0 max-[650px]:py-1 max-[650px]:text-[12px] hover:text-red-600 duration-150">
              <IoSearchOutline className="text-2xl" />
              <span>Search</span>
            </li>
          </NavLink>
        </ul>
        <div className="flex gap-4 items-center">
          <button className="w-[120px] h-[46px] bg-red-700 text-white py-3 rounded-[12px] hover:brightness-75 duration-150">
            Login
          </button>
          <button
            onClick={toggleDarkMode}
            className={`w-[48px] h-[48px] flex items-center justify-center rounded-full bg-slate-900`}
          >
            {darkMode ? (
              <MdWbSunny className="text-amber-300 text-lg" />
            ) : (
              <FaMoon className="text-amber-300 text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
