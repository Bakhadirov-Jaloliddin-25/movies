// import React from 'react'
import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { IoTvSharp } from "react-icons/io5";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";

const lang = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Rus",
    value: "ru",
  },
  {
    label: "Uzb",
    value: "uzb",
  },
];

const Header = () => {
  return (
    <div className="container flex flex-wrap items-center justify-around py-4">
      <div className="w-[112px] h-[36px]">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <ul className="flex w-[250px] flex-wrap justify-between">
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <IoTvSharp className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Afisha</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <MdOutlineVibration className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Seans</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <RiCoupon3Line className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Ticket</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <FiSearch className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Search</span>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <select className="h-full bg-slate-900 px-2 py-2 rounded-md text-white">
          {lang.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="w-[180px] bg-red-700 text-white py-3 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
