// components/UserBioInput.tsx

import React from 'react';

interface UserBioInputProps {
  bio: string;
  onChange: (value: string) => void;
}

const UserBioInput: React.FC<UserBioInputProps> = ({ bio, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Bio</label>
      <textarea
        className="resize-none appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows={4}
        placeholder="Tell us about yourself..."
        value={bio}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default UserBioInput;
