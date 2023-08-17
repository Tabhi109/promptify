import React from 'react';
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="mr-4">
          <a
            href="https://www.linkedin.com/in/abhinav-tripathi-46872b201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>
        </div>
        <div className="mr-4">
          <a
            href="https://www.instagram.com/abhinav.trip_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram/>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Tabhi109"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub/>
          </a>
        </div>
      </div>
      <p>Hi, I'm Abhinav Tripathi. Connect with me on LinkedIn, Instagram, and GitHub.</p>
    </footer>
  );
};

export default Footer;
