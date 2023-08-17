import React, { useState } from 'react';
import {FaLocationCrosshairs} from 'react-icons/fa6'
interface UserLocationInputProps {
  location: string;
  onFetchLocation: () => void;
  onChange: (value: string) => void;
}

const UserLocationInput: React.FC<UserLocationInputProps> = ({
  location,
  onFetchLocation,
  onChange,
}) => {
  const handleLocationClick = () => {
    onFetchLocation();
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Location</label>
      <div className="flex items-center">
        <input
          type="text"
          className="border rounded py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          className="ml-2 bg-gray-600 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handleLocationClick}
        >
          <FaLocationCrosshairs/>
        </button>
      </div>
    </div>
  );
};

export default UserLocationInput;
