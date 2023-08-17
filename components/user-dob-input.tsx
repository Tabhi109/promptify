import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface UserDOBProps {
  dob: Date | null;
  onChange: (date: Date | null) => void;
}

const UserDOB: React.FC<UserDOBProps> = ({ dob, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
      <DatePicker
        selected={dob}
        onChange={onChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default UserDOB;
