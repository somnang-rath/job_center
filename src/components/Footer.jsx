import React from "react";
import {
  UserRoundSearch,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
const Footer = () => {
  return (
    <div className="text-white py-10">
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-5 space-y-5">
          <div className="">
            <h2 className="text-2xl font-bold">
              Job <span className="text-teal-400">Center</span>
            </h2>
            <p className="text-sm mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tempus eleifend risus ut congue.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Easy to Apply</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Search</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Newly Added</a>
              </li>
              <li>
                <a href="#">Most Relevant</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Join Our Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              We write rarely, but only the best content.
            </p>
            <div className="flex w-56 bg-white justify-between pl-2 rounded text-black ">
              <input
                placeholder="Search"
                className=" focus:outline-none font-serif"
              />
              <div className="bg-teal-500 text-white px-3 rounded-e-sm">
                <UserRoundSearch />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              We'll never share your details.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mt-4">
              © 2023 All rights reserved.
            </p>
          </div>
          <div className="flex space-x-2">
            <Facebook
              size={15}
              className="hover:text-teal-300 cursor-pointer"
            />
            <Twitter size={15} className="hover:text-teal-300 cursor-pointer" />
            <Linkedin
              size={15}
              className="hover:text-teal-300 cursor-pointer"
            />
            <Github size={15} className="hover:text-teal-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
