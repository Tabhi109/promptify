import React, { useState } from 'react';

interface UserProfilePictureInputProps {
  profilePicture: string | null;
  onChange: (file: File | null) => void;
}

const UserProfilePictureInput: React.FC<UserProfilePictureInputProps> = ({
  profilePicture,
  onChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
    onChange(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Profile Picture</label>
      <div className="flex items-center">
        <img
          src={profilePicture || '/default-profile-picture.png'}
          alt=" "
          className="w-12 h-12 rounded-full object-cover  "
        />
        <input
          type="file"
          accept="image/*"
          className="border rounded py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UserProfilePictureInput;
