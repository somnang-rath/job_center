import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PostJobSteps from "../components/PostJobSteps";
import CategoryList from "../components/CategoryList";
import LocationForm from "../components/LocationForm";
import CreatAJob from "../components/CreatAJob";

const PostJob = () => {
  const [isOwnCompany, setIsOwnCompany] = useState(true);
  const [OnBehalf, setOnBehalf] = useState(false);
  const toggleOwnCompany = () => {
    setIsOwnCompany(!isOwnCompany);
    setOnBehalf(false);
  };
  const toggleOnBehalf = () => {
    setOnBehalf(!OnBehalf);
    setIsOwnCompany(false);
  };

  const [CompanyName, setCompanyName] = useState("");
  const handleCompanyName = (e) => {
    setCompanyName(e);
  };

  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.innerText);
  };
  const handleClearCategory = () => {
    setCategory("");
  };

  const [address, setAddress] = useState({
    country: "Combodia",
    city: "Phnom Penh",
  });
  const handleAddressChang = (newAddress) => {
    setAddress((prev) => ({
      ...prev,
      ...newAddress,
    }));
  };
  return (
    <div className="border border-r-0 border-l-0 border-gray-50 py-12">
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <div>alert Warning </div>

        <div className="flex bg-gray-100 shadow">
          <div className="w-4/12  rounded-l p-10">
            <div className="flex flex-col space-y-3 justify-center items-center w-full h-full">
              {/* Logo */}
              <h1 className="text-gray-900 text-8xl font-bold">Job</h1>
              <h1 className="text-teal-500 text-8xl font-bold">Center</h1>
            </div>
          </div>
          <div className="w-8/12  rounded-r px-10 pt-10 pb-2">
            {/* dynamic components */}
            <div>
              <CreatAJob
                isOwnCompany={isOwnCompany}
                toggleOwnCompany={toggleOwnCompany}
                OnBehalf={OnBehalf}
                toggleOnBehalf={toggleOnBehalf}
                CompanyName={CompanyName}
                handleCompanyName={handleCompanyName}
                category={category}
                handleCategory={handleCategory}
                handleClearCategory={handleClearCategory}
                address={address}
                handleAddressChang={handleAddressChang}
              />
            </div>
            <div className="mt-6 space-y-3">
              <div className="w-full bg-gray-400 h-0.5 rounded"></div>
              <div className="flex justify-between items-center">
                <button className="flex space-x-0.5  rounded bg-gray-400 text-gray-900 font-bold  px-3 py-1 cursor-pointer ">
                  <ChevronLeft />
                  <p>Back</p>
                </button>
                <button className="flex space-x-0.5  rounded bg-gray-400 text-gray-900 font-bold  px-3 py-1 cursor-pointer ">
                  <p>Next</p>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <CategoryList /> */}
        {/* <LocationForm /> */}
        <PostJobSteps />
      </div>
    </div>
  );
};

export default PostJob;
