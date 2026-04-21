import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">BloodBank</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your One Drop Can Save a Life! We are committed to ensuring blood is available when needed, connecting donors with those in need.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  Become a Donor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  Request Blood
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  Donor Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Health Street, Medical District<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400 flex-shrink-0" />
                <a href="mailto:info@bloodbank.com" className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                  info@bloodbank.com
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Emergency</h3>
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4">
              <p className="text-white font-bold text-lg mb-2">24/7 Emergency Line</p>
              <a href="tel:+1234567890" className="text-red-300 hover:text-red-200 transition-colors duration-300 text-xl font-semibold">
                1-800-BLOOD-HELP
              </a>
              <p className="text-gray-300 text-xs mt-3">
                Available round the clock for urgent blood requirements
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} BloodBank. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
