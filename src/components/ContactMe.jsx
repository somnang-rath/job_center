import React from "react";
import { Phone, Mail, MapPin, SendHorizontal } from "lucide-react";

const ContactMe = () => {
  return (
    <div className=" w-full mt-10">
      <div className="w-full md:w-[800px] m-auto py-4">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900 font-serif">
            Contact Me
          </h1>
          <p className=" text-gray-700">
            Feel free to reach out if you have any questions, or just want to
            say hello.
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-3 md:grid-cols-3 max-w-[800px] md:space-y-0 my-8 place-items-center">
          <div className=" flex flex-col justify-center items-center px-3 py-10 w-[250px] bg-white space-y-2 rounded-lg shadow-sm cursor-pointer">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-teal-100 text-blue-500">
              <Mail size={20} />
            </div>
            <h2 className="font-bold text-gray-900 ">Email</h2>
            <p className="text-sm text-gray-700">somnang.rath12@gmail.com</p>
          </div>
          <div className=" flex flex-col justify-center items-center px-3 py-10 w-[250px] bg-white space-y-2 rounded-lg shadow-sm cursor-pointer">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-teal-100 text-blue-500">
              <Phone size={20} />
            </div>
            <h2 className="font-bold text-gray-900 ">Phone</h2>
            <p className="text-sm text-gray-700">+1 (123) 456-7890</p>
          </div>
          <div className=" flex flex-col justify-center items-center px-3 py-10 w-[250px] bg-white space-y-2 rounded-lg shadow-sm cursor-pointer">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-teal-100 text-blue-500">
              <MapPin size={20} />
            </div>
            <h2 className="font-bold text-gray-900 ">Location</h2>
            <p className="text-sm text-gray-700">City, Country</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-3 py-10 bg-white rounded space-y-5 shadow"
          >
            <h1 className="text-gray-900 font-bold text-2xl">Send a Message</h1>
            <div className="flex space-x-3 justify-between items-center">
              <div className="space-y-2 w-full">
                <p className="text-gray-800">Name</p>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 rounded px-2 py-1 focus:outline-none"
                />
              </div>
              <div className="space-y-2 w-full">
                <p className="text-gray-800">Email</p>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 rounded px-2 py-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <p className="text-gray-800">Subject</p>
              <input
                type="text"
                className="w-full border border-gray-300 bg-gray-100 rounded px-2 py-1 focus:outline-none"
              />
            </div>
            <div className="space-y-2 w-full">
              <p className="text-gray-800">Message</p>
              <textarea className="w-full h-40 border border-gray-300 bg-gray-100 rounded px-2 py-1 focus:outline-none" />
            </div>
            <button className="flex justify-center items-center space-x-1 px-3 py-2 rounded text-white bg-teal-500 hover:text-teal-500 hover:bg-gray-400 hover:transition-all duration-500 cursor-pointer">
              <p className=" font-bold ">Send Message</p>
              <SendHorizontal />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
