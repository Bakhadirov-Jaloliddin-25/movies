import React from "react";
import logo from "@/assets/images/logo.svg";
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { useDarkMode } from "@/context/DarkModeProvider";

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 backdrop-blur-lg bg-opacity-80 ${
        isDarkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"
      } shadow-md transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img
          onClick={() => navigate("/")}
          className="w-28 cursor-pointer select-none hover:opacity-80 transition"
          src={logo}
          alt="logo"
        />

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {[
            { to: "/", icon: <GoHome />, label: "Home" },
            { to: "/movie", icon: <RiMovieLine />, label: "Movies" },
            { to: "/saved", icon: <IoBookmarkOutline />, label: "Saved" },
            { to: "/search", icon: <IoSearchOutline />, label: "Search" },
          ].map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive ? "text-red-600" : "hover:text-red-500"
                }`
              }
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition">
            Login
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            {isDarkMode ? (
              <MdWbSunny className="text-yellow-300 text-lg" />
            ) : (
              <FaMoon className="text-gray-300 text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-black shadow-t md:hidden py-2 z-50">
        <nav className="flex justify-around">
          {[
            { to: "/", icon: <GoHome /> },
            { to: "/movie", icon: <RiMovieLine /> },
            { to: "/saved", icon: <IoBookmarkOutline /> },
            { to: "/search", icon: <IoSearchOutline /> },
          ].map(({ to, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center text-lg p-2 ${
                  isActive ? "text-red-600" : "hover:text-red-500"
                }`
              }
            >
              {icon}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
