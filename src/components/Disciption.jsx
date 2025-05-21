import React from "react";

const Disciption = (props) => {
  const { description, setDescription, keywords, setKeywords } = props;
  const textDesible = 200;
  return (
    <div>
      <div className="flex items-end space-x-3">
        {/* Header */}
        <div className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex justify-center items-center">
          02
        </div>
        <div className="font-bold text-2xl text-gray-900">Description</div>
      </div>
      <div>
        <div className="flex justify-between items-center space-y-3 pt-6">
          {/* Title */}
          <p className="text-gray-900 font-bold after:content-['*'] after:text-red-600 after:text-lg">
            Description.
          </p>
          <div className="flex justify-center items-center">
            <span className="text-teal-500 mr-1 font-bold">
              {description.length}
            </span>
            <span className="text-sm text-gray-700">
              characters remaining (200)
            </span>
          </div>
        </div>
      </div>
      <textarea
        disabled={description.length === textDesible}
        onChange={(e) => setDescription(e.target.value)}
        className={`${
          description.length === textDesible
            ? "w-full h-44 bg-gray-100 border border-red-300 rounded focus:outline-none px-3 py-2 font-serif"
            : "w-full h-44 bg-gray-100 border border-gray-300 rounded focus:outline-none px-3 py-2 font-serif"
        }`}
      ></textarea>
      <div className="space-y-3 mt-6">
        <p className="text-gray-900 font-bold after:content-['*'] after:text-red-600 after:text-lg">
          Keywords.
        </p>
        <input
          onChange={(e) => setKeywords(e.target.value)}
          value={keywords}
          type="text"
          className="w-full bg-gray-100 border border-gray-300 rounded focus:outline-none px-3 py-2 font-serif"
        />
        <p className="text-gray-500  text-sm">
          Separate each keyword with a comma..
        </p>
      </div>
    </div>
  );
};

export default Disciption;
