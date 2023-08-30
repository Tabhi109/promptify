// components/UserAuthenticationForm.tsx

import React, { useState } from 'react';
import UserCredentialsInput from './user-credential-input';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserAuthenticationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/auth', {
        email,
        password,
      });

      const { data } = response;

      if (data.id) {
        router.push(`/news-feed/${data.id}`);
      } else {
        // Handle authentication failure
        alert('Authentication failed');
        router.reload();
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      // Handle error
    }
  };
  const handleSignUp =() => {
    router.push('/user_profile_creation');
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">User Authentication</h2>
      <form onSubmit={handleSubmit}>
        <UserCredentialsInput
          email={email}
          password={password}
          onChange={(field, value) => {
            if (field === 'email') {
              setEmail(value);
            } else if (field === 'password') {
              setPassword(value);
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="ml-20 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 mt-4 rounded-md"
        >
          Log In
        </button>
        <button
          onClick={handleSignUp}
          className="ml-20 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 mt-4 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserAuthenticationForm;
