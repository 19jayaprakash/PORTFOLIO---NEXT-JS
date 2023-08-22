import React from "react";
import './about.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: "About",
  description: "About Page",
};

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-4">About</h1>
        <p className="py-5 text-xl text-center">
        To become a successful professional in a challenging workplace to enhance my knowledge in the field of information Technology as well as work towards betterment of an organization.
        </p>
        <div className="flex gap-20 items-center justify-center">
            <a href="https://github.com/19jayaprakash" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-7xl transition-colors duration-300 text-gray-700 hover:text-blue-500" />
            </a>
            <a href="https://instagram.com/_mr.rc_200?igshid=MmIzYWVlNDQ5Yg==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-7xl transition-colors duration-300 text-gray-700 hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/jayaprakash-r-276a18226/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-7xl transition-colors duration-300 text-gray-700 hover:text-blue-500" />
            </a>
        </div>
    </div>
  );
};

export default About;




