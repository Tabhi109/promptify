
import React, { useState } from 'react';
import UserNameInput from './user-name-input';
import UserBioInput from './user-bio-input';
import UserDOB from './user-dob-input';
import PreferredTags from './user-preferred-tags';
import UserProfilePictureInput from './user-profile-pic-input'; 
import UserLocationInput from './user-location-input';
import UserCredentialsInput from './user-credential-input';
import axios from 'axios';
interface UserProfileFormProps {
  onSubmit: (userData: UserProfileData) => void;
}

export interface UserProfileData {
  firstName: string;
  lastName: string;
  bio: string;
  dob: Date | null;
  preferredTags: string[];
  profilePicture: string | null;
  location: string;
  email: string;
  password: string;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserProfileData>({
    firstName: '',
    lastName: '',
    bio: '',
    dob: null,
    preferredTags: [],
    profilePicture: null,
    location: '',
    email: '', 
    password: '',
  });

  const handleInputChange = (
    field: keyof UserProfileData,
    value: string | Date | string[] | File | null
  ) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleInputChange('location', `Point(${longitude} ${latitude})`);
        },
        (error) => {
          console.error('Error fetching location:', error);
          // Handle error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle error
    }
  };
  const handleFetchLocation = () => {
    fetchUserLocation();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send the data to the API
      await axios.post('http://localhost:3000/api/user/create', userData);

      // Call the onSubmit callback with the latest state
      onSubmit(userData);
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error
    }
  };


  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <UserProfilePictureInput
          profilePicture={userData.profilePicture}
          onChange={(file) => handleInputChange('profilePicture', file)}
        />
        <UserLocationInput
        location={userData.location}
        onFetchLocation={handleFetchLocation}
        onChange={(value) => handleInputChange('location', value)}
      />
        <UserCredentialsInput
          email={userData.email}
          password={userData.password}
          onChange={(field, value) => handleInputChange(field, value)}
        />
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



 
