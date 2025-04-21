import React from "react";

const PostJobSteps = () => {
  return (
    <div className="hidden lg:flex items-center w-full space-x-3 my-10 px-10 2xl:px-0 overflow-hidden">
      <div className="grid grid-cols-6 items-center w-full gap-2">
        <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          01
        </div>
        <p className="text-sm font-bold">Basics</p>
        <hr className="col-span-4 border border-gray-400" />
      </div>
      <div className="grid grid-cols-6 items-center w-full gap-2">
        <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          02
        </div>
        <p className="text-sm font-bold">Description</p>
        <hr className="col-span-4 border border-gray-400" />
      </div>

      <div className="grid grid-cols-6 items-center w-full gap-2">
        <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          03
        </div>
        <p className="text-sm font-bold">Details</p>
        <hr className="col-span-4 border border-gray-400" />
      </div>
      <div className="grid grid-cols-6 items-center w-full gap-2">
        <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          04
        </div>
        <p className="text-sm font-bold">Media</p>
        <hr className="col-span-4 border border-gray-400" />
      </div>
    </div>
  );
};

export default PostJobSteps;
