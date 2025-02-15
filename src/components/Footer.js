import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/auger new bmw logo .png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div id="contact" className="container mx-auto py-12">
        {/* Desktop Footer */}
        <div className="hidden md:flex md:justify-between items-center">
          {/* Left section - Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.3 }}>
            <img src={logo} alt="Company Logo" className="h-12 md:h-16 mr-2" />
          </motion.div>

          {/* Middle section - Navigation Links */}
          <div className="flex items-center">
            <ul className="flex space-x-8">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="home" // Corrected ID
                  spy={true}
                  smooth={true}
                  offset={-80} // Adjust for fixed navbar
                  duration={500}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Products
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Right section - Social Media Icons */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/auger_kenya?igsh=MTd2cmJ5dHpqeXh6bg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden mt-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Logo */}
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <img src={logo} alt="Company Logo" className="h-12 mr-2" />
            </motion.div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="products"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Products
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/european_star?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center text-white/80">
          <p>&copy; {currentYear} Auger BMW. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by{" "}
            <a
              href="mailto:abdubadhawi10@gmail.com"
              className="text-white hover:text-blue-400 underline transition-colors"
            >
              Abdu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
