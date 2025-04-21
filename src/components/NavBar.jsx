import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
const link = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "aboutUs",
  },
  {
    label: "Post Job",
    path: "postjob",
  },
];
const NavBar = () => {
  return (
    <div className="flex fixed w-full z-30 backdrop-blur-sm top-0">
      {/* Small NavBar */}
      <div className=" w-8/12 flex justify-between items-center m-auto p-3">
        <ul className="flex space-x-4 text-sm ">
          {link.map((e) => (
            <li key={e.label}>
              <NavLink
                to={e.path}
                className={({ isActive }) =>
                  `flex focus:outline-none ${
                    isActive ? "flex text-cyan-300 focus:outline-none" : ""
                  }`
                }
              >
                {e.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <NavLink
            to="https://facebook.com"
            target="_blank"
            className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-700"
          >
            <Facebook size={16} />
          </NavLink>

          <NavLink
            to="https://twitter.com"
            target="_blank"
            className="w-5 h-5 flex items-center justify-center bg-sky-500 rounded-full text-white hover:bg-sky-600"
          >
            <Twitter size={16} />
          </NavLink>

          <NavLink
            to="https://youtube.com"
            target="_blank"
            className="w-5 h-5 flex items-center justify-center bg-red-600 rounded-full text-white hover:bg-red-700"
          >
            <Youtube size={16} />
          </NavLink>

          <NavLink
            to="https://instagram.com"
            target="_blank"
            className="w-5 h-5 flex items-center justify-center bg-pink-500 rounded-full text-white hover:bg-pink-600"
          >
            <Instagram size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
