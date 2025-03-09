import React from "react";
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useDarkMode } from "@/context/DarkModeProvider";
import logo from "@/assets/images/logo.svg";

const NAV_ITEMS = [
  { to: "/", icon: <GoHome />, label: "Home" },
  { to: "/movie", icon: <RiMovieLine />, label: "Movies" },
  { to: "/saved", icon: <IoBookmarkOutline />, label: "Saved" },
  { to: "/search", icon: <IoSearchOutline />, label: "Search" },
];

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-opacity-80 shadow-md transition-all duration-300 ${
          isDarkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <img
            src={logo}
            alt="logo"
            className="w-28 cursor-pointer select-none hover:opacity-80 transition"
            onClick={() => navigate("/")}
          />

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {NAV_ITEMS.map(({ to, icon, label }) => (
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

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition">
              Login
            </button>

            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <MdWbSunny className="text-yellow-300 text-lg" />
              ) : (
                <FaMoon className="text-gray-300 text-lg" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg md:hidden py-3 px-5 rounded-2xl flex justify-around items-center z-50">
        {NAV_ITEMS.map(({ to, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-lg p-3 transition-all ${
                isActive
                  ? "text-red-600 bg-red-600/20 rounded-xl shadow-md scale-110"
                  : "text-red-500 hover:bg-gray-200/40 dark:hover:bg-gray-700/40 rounded-xl"
              }`
            }
          >
            {icon}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Header;
