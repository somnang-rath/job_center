import React from "react";

const Details = (props) => {
  const {
    salary,
    setSalary,
    setSalaryPricing,
    salaryPricing,
    setJobType,
    jobType,
    setExperience,
  } = props;
  return (
    <div className="space-y-6">
      <div className="flex items-end space-x-3">
        {/* Header */}
        <div className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex justify-center items-center">
          03
        </div>
        <div className="font-bold text-2xl text-gray-900">Detail</div>
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="text-xl font-medium mr-4">Detail</h1>
        <hr className="w-full" />
      </div>
      <div className="flex justify-center items-center space-x-3">
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Salary</label>
          <div className="flex justify-center items-center rounded bg-white">
            <h2 className="bg-teal-400 px-2 py-2 rounded-l text-white font-bold">
              $
            </h2>
            <input
              onChange={(e) => setSalary(e.target.value)}
              placeholder={`${salary ? salary : "0"} `}
              type="text"
              className="w-full px-2 py-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Salary Pricing</label>
          <select
            onChange={(e) => setSalaryPricing(e.target.value)}
            value={salaryPricing}
            className="w-full px-2 py-2 rounded bg-white focus:outline-none"
          >
            <option>00</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full px-2 py-2 rounded bg-white focus:outline-none"
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </div>
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Experience</label>
          <select
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-2 py-2 rounded bg-white focus:outline-none"
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="w-62 text-xl font-medium ">Company Detail</h1>
        <hr className="w-full" />
      </div>
      <div className="flex justify-center items-center space-x-3">
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Company name</label>
          <div className="flex justify-center items-center rounded bg-white">
            <input
              placeholder="Company name"
              type="text"
              className="w-full px-2 py-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <label className="block text-md font-bold">Company Website</label>
          <div className="flex justify-center items-center rounded bg-white">
            <input
              placeholder="Company Website"
              type="text"
              className="w-full px-2 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
