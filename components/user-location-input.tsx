import React, { useState } from 'react';

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
      <label className="block text-gray-700 font-bold mb-2">Location</label>
      <div className="flex items-center">
        <input
          type="text"
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          className="ml-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handleLocationClick}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 22s8-10 8-14a8 8 0 1 0-16 0c0 4 8 14 8 14z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserLocationInput;
