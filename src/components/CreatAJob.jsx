import React from "react";
import { CircleCheck } from "lucide-react";

const CreatAJob = (props) => {
  const {
    isOwnCompany,
    toggleOwnCompany,
    toggleOnBehalf,
    OnBehalf,
    CompanyName,
    handleCompanyName,
  } = props;
  return (
    <div>
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
          className="border w-full p-3 rounded bg-gray-50 text-gray-900 focus:outline-none"
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
                ? "flex items-center space-x-2 py-1 px-5 border border-teal-500 rounded focus:outline-none"
                : "flex items-center space-x-2 py-1 px-5 border rounded focus:outline-none"
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
            className="w-full  focus:outline-none bg-gray-200 text-gray-900 rounded p-2"
            // value={OnBehalf ? value:""}
            onChange={(e) => handleCompanyName(e.target.value)}
          />
        </div>
      </div>

      <div>{/* Category */}</div>

      <div>{/* Location */}</div>
    </div>
  );
};

export default CreatAJob;
