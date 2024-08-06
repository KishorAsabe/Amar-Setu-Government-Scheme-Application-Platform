import React from "react"

import Footer from "../components/Common/Footer"
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center space-x-6 mt-4">
        {/* Add the appropriate links and icons for social media */}
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FaLinkedin className="text-4xl" />
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebook className="text-4xl" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FaTwitter className="text-4xl" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FaInstagram className="text-4xl" />
        </a>
      </div>
  
      <div className="text-3xl mt-4">Footer Only</div>
    </div>
  );
}

export default Contact
