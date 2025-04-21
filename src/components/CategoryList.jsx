import React from "react";
import Category from "../mocks/Category";
import { CircleCheck, BadgeAlert } from "lucide-react";

const CategoryList = () => {
  const category = "warehouse";
  return (
    <div>
      <div>
        <div className="grid grid-cols-5 border border-gray-300 h-96">
          <ul className="col-span-2 overflow-hidden overflow-y-auto">
            {Category.length > 0 &&
              Category.map((e, i) => (
                <li
                  key={e + i}
                  className="flex justify-between items-center font-bold text-lg bg-gray-200 border-b border-b-gray-100 text-gray-500 p-2 cursor-pointer"
                >
                  <span>{e.name}</span>
                  {category === e.name ? (
                    <CircleCheck className="text-teal-500" />
                  ) : (
                    <BadgeAlert />
                  )}
                </li>
              ))}
          </ul>
          <div className="col-span-3 border-l border-gray-300"></div>
        </div>
        <div className="w-full my-5 border border-gray-300"> </div>
        <div className="flex justify-between items-center">
          <button className="bg-red-500 px-10 py-1 rounded font-bold text-white cursor-pointer">
            Clear All
          </button>
          <button className="bg-teal-500 px-10 py-1 rounded font-bold text-white cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
