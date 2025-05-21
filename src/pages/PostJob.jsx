import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PostJobSteps from "../components/PostJobSteps";
import CategoryList from "../components/CategoryList";
import LocationForm from "../components/LocationForm";
import Details from "../components/Details";
import CreatAJob from "../components/CreatAJob";
import Disciption from "../components/Disciption";
import Medials from "../components/Medials";

const PostJob = () => {
  const TestSubmite = () => {
    console.log(salary);
    console.log(salaryPricing);
    console.log(jobType);
    console.log(experience);
  };
  // Details
  const [salary, setSalary] = useState(0);
  const [salaryPricing, setSalaryPricing] = useState(0);
  const [jobType, setJobType] = useState("Full-Time");
  const [experience, setExperience] = useState(0);
  // Disciption
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  // Medials
  const [logo, setLogo] = useState(null);
  const [photos, setPhotos] = useState([]);

  const [displayComponent, setDisplayComponent] = useState(0);

  // Create A Job
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

  const handleSubmit = async () => {
    const job = {
      id: Date.now(),
      description,
      logo,
      photos,
    };
    await fetch("http://localhost:3001/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "applicatio/json",
      },
      body: JSON.stringify(job),
    });
  };
  const renderComponent = () => {
    switch (displayComponent) {
      case 0:
        return (
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
        );
      case 1:
        return (
          <Disciption
            description={description}
            setDescription={setDescription}
            keywords={keywords}
            setKeywords={setKeywords}
          />
        );
      case 2:
        return (
          <Details
            salary={salary}
            setSalary={setSalary}
            salaryPricing={salaryPricing}
            setSalaryPricing={setSalaryPricing}
            jobType={jobType}
            setJobType={setJobType}
            experience={experience}
            setExperience={setExperience}
          />
        );
      case 3:
        return (
          <Medials
            logo={logo}
            setLogo={setLogo}
            photos={photos}
            setPhotos={setPhotos}
          />
        );
      default:
        return <CreatAJob />;
    }
  };

  return (
    <div className="border border-r-0 border-l-0 border-gray-50 py-12">
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <div>alert Warning </div>

        <div className="flex w-full bg-gray-100 shadow">
          <div className=" hidden w-4/12  rounded-l p-10 md:flex">
            <div className="flex flex-col space-y-3 justify-center items-center w-full h-full">
              {/* Logo */}
              <h1 className="text-gray-900 text-8xl font-bold">Job</h1>
              <h1 className="text-teal-500 text-8xl font-bold">Center</h1>
            </div>
          </div>
          <div className="w-8/12 min-h-[600px] h-auto rounded-r px-10 pt-10 pb-2 flex flex-col justify-between ">
            {/* dynamic components */}
            <div>{renderComponent()}</div>
            <div className="mt-6 space-y-3">
              <div className="w-full bg-gray-400 h-0.5 rounded"></div>
              <div
                className={`${
                  displayComponent === 0
                    ? "flex justify-end items-center"
                    : "flex justify-between items-center"
                }`}
              >
                <button
                  onClick={() =>
                    setDisplayComponent((prev) => Math.max(0, prev - 1))
                  }
                  hidden={displayComponent === 0}
                  className="flex space-x-0.5  rounded border border-gray-300 justify-center items-center text-gray-900 hover:text-teal-400 transition-all duration-300 font-bold  px-6 py-2 cursor-pointer "
                >
                  <ChevronLeft />
                  <p>Back</p>
                </button>
                <button
                  onClick={() =>
                    setDisplayComponent((prev) => Math.min(3, prev + 1))
                  }
                  hidden={displayComponent === 3}
                  className="flex space-x-0.5  rounded border border-gray-300 justify-center items-center text-gray-900 hover:text-teal-400 transition-all duration-300 font-bold  px-6 py-2 cursor-pointer "
                >
                  <p>Next</p>
                  <ChevronRight />
                </button>
                <button
                  onClick={TestSubmite}
                  hidden={displayComponent !== 3}
                  className="px-6 py-2 bg-teal-500 rounded text-white font-semibold "
                >
                  Save
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
