import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Import Icons
import { Link } from "react-scroll"; // Import smooth scroll
import logo from "../assets/auger new bmw logo .png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        background:
          "linear-gradient(120deg, #001f3f, #003973, #005aa7, #002244)", // BMW deep blues
      }}
    >
      {/* Logo */}
      <Link
          to="home"
          smooth={true}
          duration={600}
        >
      <motion.img
    
        src={logo}
        alt="Logo"
        className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
        whileHover={{ scale: 1.3 }}
      />
      </Link>
     

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={toggleMenu}
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
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <motion.div
  className={`flex-col md:flex-row md:flex items-center md:space-x-8 text-lg text-white absolute md:relative md:top-auto md:left-auto top-16 left-0 w-full md:w-auto ${
    isOpen ? "bg-gradient-to-r from-blue-900 via-sky-500 to-red-600" : "bg-transparent"
  } md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${
    isOpen ? "flex" : "hidden"
  }`}
>
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="block md:inline-block mb-4 md:mb-0 cursor-pointer transition-colors"
        >
          <motion.span
            whileHover={{ color: "#00aaff" }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.span>
        </Link>

        <Link
          to="products"
          smooth={true}
          duration={600}
          offset={-50}
          className="block md:inline-block mb-4 md:mb-0 cursor-pointer transition-colors"
        >
          <motion.span
            whileHover={{ color: "#00aaff" }}
            transition={{ duration: 0.3 }}
          >
            Products
          </motion.span>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          className="block md:inline-block mb-4 md:mb-0 cursor-pointer transition-colors"
        >
          <motion.span
            whileHover={{ color: "#00aaff" }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.span>
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="block md:inline-block mb-4 md:mb-0 cursor-pointer transition-colors"
        >
          <motion.span
            whileHover={{ color: "#00aaff" }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.span>
        </Link>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Facebook Icon */}
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 rounded-full transition-all"
            whileHover={{
              scale: 1.1,
              color: "#1877F2", // Facebook Blue
            }}
          >
            <FaFacebookF />
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="https://www.instagram.com/auger_kenya?igsh=MTd2cmJ5dHpqeXh6bg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 rounded-full transition-all"
            whileHover={{
              scale: 1.1,
              color: "#E1306C", // Instagram Pink
            }}
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
