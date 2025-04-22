import { Target } from "lucide-react";
import React from "react";

const LocationForm = (props) => {
  const { toggleLocationShow, handleAddressChang, address } = props;
  return (
    <div className="max-w-lg">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white space-y-5 shadow p-5 rounded"
      >
        <div className="space-y-3">
          <h1 className="font-bold text-3xl">My Location</h1>
          <label className="block font-bold">Full Address</label>
          <input
            type="text"
            disabled
            placeholder={`${address.country}, ${address.city}`}
            className="w-full border border-gray-300 rounded px-3 py-1 font-bold"
          />
        </div>
        <div className="flex w-full justify-between h-auto space-x-2">
          <div className="space-y-3">
            <label className="block font-bold">Country</label>
            <input
              type="text"
              onChange={(e) => handleAddressChang({ country: e.target.value })}
              placeholder={address.country}
              className="border border-gray-300 rounded focus:outline-none px-2 py-1 focus:ring focus:ring-teal-100 font-serif w-full"
            />
          </div>
          <div className="space-y-3">
            <label className="block font-bold">City</label>
            <input
              onChange={(e) => handleAddressChang({ city: e.target.value })}
              type="text"
              placeholder={address.city}
              className="border border-gray-300 rounded focus:outline-none px-2 py-1 focus:ring focus:ring-teal-100 font-serif w-full"
            />
          </div>
        </div>
        <div className="border border-gray-300"></div>
        <button
          onClick={toggleLocationShow}
          className="bg-teal-500 px-5 py-1 text-white font-bold rounded cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
