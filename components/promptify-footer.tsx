// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="mr-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 21v-6M4 10.5a4 4 0 0 1 4-4h12"
              ></path>
            </svg>
          </a>
        </div>
        <div className="mr-4">
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c-5 1.5-5-2.5-7-3m14 6.5l-2.35-2.35A7.82 7.82 0 0 0 12 17a7.82 7.82 0 0 0-2.65 3.15L7 25.5M16.65 15.15a7.82 7.82 0 0 0 0-10.3M22 12h-2M4 12H2"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <p>Hi, I'm Abhinav Tripathi. Connect with me on LinkedIn, Instagram, and GitHub.</p>
    </footer>
  );
};

export default Footer;
