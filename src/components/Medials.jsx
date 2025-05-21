import React from "react";
import { ImageDown } from "lucide-react";
const Medials = (props) => {
  const { logo, setLogo, photos, setPhotos } = props;

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (photos.length + files.length > 6) return;
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos([...photos, ...newPhotos]);
  };

  const removePhoto = (index) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
  };
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📎 Media</h2>

      {/* Company Logo */}
      <div className="mb-6">
        <label className="font-medium text-gray-600 block mb-2">
          Company Logo
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center w-48 h-48">
          {logo ? (
            <img
              src={logo}
              alt="Company Logo"
              className="h-full w-auto object-cover object-center"
            />
          ) : (
            <label className="cursor-pointer text-center text-teal-500">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleLogoUpload}
              />
              <div className="flex flex-col items-center">
                <ImageDown size={30} />
                <p className="mt-2">Select a Photo</p>
              </div>
            </label>
          )}
        </div>
      </div>

      {/* My Photos */}
      <div>
        <label className="font-medium text-gray-600 block mb-2">
          My Photos
        </label>
        <div className="flex flex-wrap gap-4 mb-2">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-32 h-32">
              <img
                src={photo}
                alt={`upload-${index}`}
                className="w-full h-full object-cover object-center rounded"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded px-2 py-1 text-xs"
              >
                Remove
              </button>
            </div>
          ))}
          {photos.length < 6 && (
            <label className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded cursor-pointer text-teal-500 text-sm">
              <input
                type="file"
                accept="image/*"
                hidden
                multiple
                onChange={handlePhotoUpload}
              />
              <ImageDown size={30} />
              Add New
            </label>
          )}
        </div>
        <p className="text-xs text-yellow-600">
          ⚠️ We support .jpg, .jpeg, .png and .svg images only.
        </p>
        <p className="text-sm text-gray-600 mt-1">{photos.length} / 6</p>
      </div>
    </div>
  );
};

export default Medials;
