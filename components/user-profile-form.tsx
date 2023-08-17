// components/UserProfileForm.tsx

import React, { useState } from 'react';
import UserNameInput from './user-name-input';
import UserBioInput from './user-bio-input';
import UserDOB from './user-dob-input';
import PreferredTags from './user-preferred-tags';

interface UserProfileFormProps {
  onSubmit: (userData: UserProfileData) => void;
}

export interface UserProfileData {
  firstName: string;
  lastName: string;
  bio: string;
  dob: Date | null;
  preferredTags: string[];
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserProfileData>({
    firstName: '',
    lastName: '',
    bio: '',
    dob: null,
    preferredTags: [],
  });

  const handleInputChange = (
    field: keyof UserProfileData,
    value: string | Date | string[] | null
  ) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <UserNameInput
          firstName={userData.firstName}
          lastName={userData.lastName}
          onChange={(field, value) => handleInputChange(field, value)}
        />
        <UserBioInput
          bio={userData.bio}
          onChange={(value) => handleInputChange('bio', value)}
        />
        <UserDOB
          dob={userData.dob}
          onChange={(date) => handleInputChange('dob', date)}
        />
        <PreferredTags
          selectedTags={userData.preferredTags}
          onChange={(tags) => handleInputChange('preferredTags', tags)}
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 mt-4 rounded-md"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
