import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { QrCode, Heart } from "lucide-react";
import Jobs from "../data/Jobs";
// import { useState } from "react";
import QRCode from "react-qr-code";
import { DataAPI } from "../data/DataProvider";

const JobCard = () => {
  const posts = useContext(DataAPI);
  const [activeQR, setActiveQR] = useState(null);
  const toggleQR = (id) => {
    setActiveQR((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-16">
      <ul className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {posts.length > 0 &&
          posts.map((job) => (
            <li
              key={job.id}
              className="bg-white rounded shadow-sm w-full max-w-sm mx-auto"
            >
              <div className="relative">
                <img
                  src={job.image_post}
                  alt="name"
                  className="w-full h-52 rounded-t object-cover object-center"
                />
                {activeQR === job.id && (
                  <div className="absolute flex justify-center items-center top-0 w-full z-10 h-52 rounded-t backdrop-blur-sm">
                    <QRCode value={job.company_website} size={200} />
                  </div>
                )}

                {job.featured && (
                  <div className="absolute flex  bg-red-500 w-24 text-white shadow rounded-[5px] font-bold justify-center items-center top-0 right-0">
                    Featured
                  </div>
                )}
              </div>
              <div className="space-y-3 p-2">
                <div>
                  <p className="text-sm text-gray-400">{job.category}</p>
                  <Link
                    to={job.company_website}
                    className="focus:outline-none font-bold "
                  >
                    {job.title}
                  </Link>
                </div>
                <div className="flex justify-between items-center capitalize">
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  <p className="bg-green-400 text-white rounded font-bold text-sm cursor-pointer px-1">
                    {job.jobType}
                  </p>
                </div>
              </div>
              <div className="flex px-3 pb-3 justify-between items-center">
                <div className="flex space-x-1">
                  <button
                    onClick={() => toggleQR(job.id)}
                    className="cursor-pointer focus:outline-none"
                  >
                    <QrCode
                      size={20}
                      className={
                        activeQR === job.id ? "text-red-500" : "text-blue-500"
                      }
                    />
                  </button>

                  <Heart size={20} className="cursor-pointer" />
                </div>
                <div>
                  <p className="text-sm font-semibold">${job.salary}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default JobCard;
