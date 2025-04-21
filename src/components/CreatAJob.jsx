import React from "react";
import { useState } from "react";
import {
  CircleCheck,
  ClipboardPlus,
  CheckCheck,
  MessageCircleX,
} from "lucide-react";
import CategoryList from "./CategoryList";

const CreatAJob = (props) => {
  const [categoryShow, setCategoryShow] = useState(false);
  const toggleShow = () => {
    setCategoryShow(!categoryShow);
  };
  const {
    isOwnCompany,
    toggleOwnCompany,
    toggleOnBehalf,
    OnBehalf,
    CompanyName,
    handleCompanyName,
    category,
    handleCategory,
    handleClearCategory,
  } = props;
  return (
    <div>
      <div
        className={`${
          categoryShow
            ? "fixed inset-0 backdrop-blur-xs transition-all duration-500 flex justify-center items-center z-40"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <CategoryList
          toggleShow={toggleShow}
          category={category}
          handleCategory={handleCategory}
          handleClearCategory={handleClearCategory}
        />
      </div>
      <div className="flex items-end space-x-3">
        {/* Header */}
        <div className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex justify-center items-center">
          01
        </div>
        <div className="font-bold text-2xl text-gray-900">Creat A Job</div>
      </div>

      <div className="space-y-3 pt-6">
        {/* Title */}
        <p className="text-gray-900 font-bold after:content-['*'] after:text-red-600 after:text-lg">
          Creat a title for your ad.
        </p>
        <input
          type="text"
          placeholder="Ex.Full-time Staff"
          required
          className="border border-gray-500 w-full px-3 py-2 rounded bg-gray-50 text-gray-900 focus:outline-none"
        />
      </div>

      <div className="space-y-3">
        {/* Owner */}
        <p className="text-gray-900 font-bold after:content-['*'] after:text-red-600 after:text-lg">
          This is for
        </p>
        <div className="flex space-x-2">
          <button
            onClick={toggleOwnCompany}
            className={`${
              isOwnCompany
                ? "flex items-center space-x-2 py-1 px-5 border border-teal-500 rounded focus:outline-none"
                : "flex items-center space-x-2 py-1 px-5 border rounded focus:outline-none"
            }`}
          >
            <CircleCheck
              size={20}
              className={`${
                isOwnCompany
                  ? "text-teal-500 transition-all duration-500"
                  : "w-0 h-0 overflow-hidden"
              }`}
            />
            <p>My own company</p>
          </button>
          <button
            onClick={toggleOnBehalf}
            className={`${
              OnBehalf
                ? "flex items-center space-x-2 py-1 px-5 border border-teal-500 rounded focus:outline-none cursor-pointer"
                : "flex items-center space-x-2 py-1 px-5 border rounded focus:outline-none cursor-pointer"
            }`}
          >
            <CircleCheck
              size={20}
              className={`${
                OnBehalf
                  ? "text-teal-500 transition-all duration-500"
                  : "w-0 h-0 overflow-hidden"
              }`}
            />
            <p>On behalf of other company</p>
          </button>
        </div>
        <div
          className={`${
            OnBehalf
              ? "w-full transition-all duration-300"
              : "w-0 h-0  overflow-hidden"
          } `}
        >
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border border-gray-500  focus:outline-none bg-gray-50 text-gray-900 rounded py-2 px-3"
            // value={OnBehalf ? value:""}
            onChange={(e) => handleCompanyName(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3 mt-5">
        {/* Category */}
        <p className="text-gray-900 font-bold">
          Where do you want your ad displayed
        </p>
        <div className="flex space-x-3">
          <button
            onClick={toggleShow}
            className="flex justify-center items-center space-x-1 border border-gray-300 rounded bg-gray-100 px-3 py-1 focus:outline-none cursor-pointer"
          >
            <ClipboardPlus size={20} />
            <p className="text-gray-900 font-serif">Category</p>
          </button>
          <div
            className={`${
              category ? "relative  rounded" : "w-0 h-0 overflow-hidden"
            } `}
          >
            <button
              onClick={handleClearCategory}
              className={`${
                category
                  ? "absolute -top-3 -right-3 hover:text-red-500 cursor-pointer"
                  : "w-0 h-0 overflow-hidden"
              }`}
            >
              <MessageCircleX className="bg-white" />
            </button>

            <div className=" flex space-x-1 border border-gray-300 rounded bg-gray-100 px-3 py-1">
              <CheckCheck className="text-teal-500" />
              <p>{category}</p>
            </div>
          </div>
        </div>
      </div>

      <div>{/* Location */}</div>
    </div>
  );
};

export default CreatAJob;
