import React from 'react';

interface UserNameInputProps {
  firstName: string;
  lastName: string;
  onChange: (field: 'firstName' | 'lastName', value: string) => void;
}

const UserNameInput: React.FC<UserNameInputProps> = ({ firstName, lastName, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Name</label>
      <div className="flex">
        <input
          type="text"
          className="appearance-none border rounded w-1/2 mr-2 py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
        />
        <input
          type="text"
          className="appearance-none border rounded w-1/2 py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserNameInput;
