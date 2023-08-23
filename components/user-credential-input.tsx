// components/UserCredentialsInput.tsx

import React from 'react';

interface UserCredentialsInputProps {
  email: string;
  password: string;
  onChange: (field: 'email' | 'password', value: string) => void;
}

const UserCredentialsInput: React.FC<UserCredentialsInputProps> = ({ email, password, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Credentials</label>
      <div>
        <input
          type="email"
          className="border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <input
          type="password"
          className="border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange('password', e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserCredentialsInput;
