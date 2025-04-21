import React from "react";
import { useState } from "react";

import PostJobSteps from "../components/PostJobSteps";
import CategoryList from "../components/CategoryList";
import LocationForm from "../components/LocationForm";
import CreatAJob from "../components/CreatAJob";

const PostJob = () => {
  const [isOwnCompany, setIsOwnCompany] = useState(false);
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
  return (
    <div className="border border-r-0 border-l-0 border-gray-50 py-12">
      <div className="px-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <div>alert Warning </div>

        <div>
          <div>Image</div>
          <div>
            {/* dynamic components */}
            <div>
              <CreatAJob
                isOwnCompany={isOwnCompany}
                toggleOwnCompany={toggleOwnCompany}
                OnBehalf={OnBehalf}
                toggleOnBehalf={toggleOnBehalf}
                CompanyName={CompanyName}
                handleCompanyName={handleCompanyName}
              />
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
