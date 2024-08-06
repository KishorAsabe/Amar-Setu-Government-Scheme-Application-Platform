import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#2F2C57] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg">©2024 Amar-Setu</h4>
            <p>Powered by Digital India Corporation(DIC)<br />
              Government of India
            </p>
            <div className="flex space-x-6 mt-4">
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
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Screen Reader</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
              <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Useful Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">India.gov.in</a></li>
              <li><a href="#" className="hover:underline">MyGov</a></li>
              <li><a href="#" className="hover:underline">Data.gov.in</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Get in touch</h4>
            <p>
              Pimpri Chinchwad, Akurdi, Pune - 411035, India
            </p>
            <p>Email: <a href="smartdeveloper18@gmail.com" className="hover:underline">smartdeveloper18@gmail.com</a></p>
            <p>Phone: </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>Last Updated On: 06/08/2024 | Under development...!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
