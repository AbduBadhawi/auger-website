import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-700"
        style={{
          backgroundSize: "300% 300%",
          filter: "blur(80px)",
        }}
      />

      {/* Main Content */}
      <section className="relative w-full max-w-7xl mx-auto py-20 px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg neon-text">
            Visit <span className="text-blue-300">Auger BMW</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Your trusted partner for <span className="text-blue-300">BMW spare parts</span> in Nairobi.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Google Map - Full Fit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border-4 border-blue-400 animate-border-glow"
            style={{ width: "100%", height: "100%" }}
          >
            <iframe
              className="w-full h-full rounded-xl"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788329160439!2d36.8306030740313!3d-1.3019285986856999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f119237aa6781%3A0xfc454eaf4b0abe7b!2sAuger%20BMW!5e0!3m2!1sen!2ske!4v1739466015093!5m2!1sen!2ske"
              style={{ width: "100%", height: "400px", border: "0" }}
              allowFullScreen=""
              loading="lazy"
            >
                </iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glassmorphism p-8 rounded-xl shadow-xl text-white border-4 border-blue-400 animate-border-glow"
          >
            <h3 className="text-3xl font-semibold text-blue-300 flex items-center">
              <FaMapMarkerAlt className="mr-3" /> Our Address
            </h3>
            <p className="mt-2 text-gray-300">
              <a
                href="https://maps.app.goo.gl/AsBnuYKqNRRCbSQj6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Lusaka Road, Opposite Total Petrol Station, Nairobi, Kenya
              </a>
            </p>

            <div className="border-t border-gray-600 my-6"></div>

            <h3 className="text-3xl font-semibold text-blue-300 flex items-center">
              <FaPhoneAlt className="mr-3" /> Contact Us
            </h3>

            <p className="mt-2 text-gray-300">
              Phone:{" "}
              <a href="tel:+254713182989" className="text-blue-300 hover:underline">
                +254 713 182 989
              </a>
            </p>
            <p className="mt-2 text-gray-300">
              Email:{" "}
              <a href="mailto:info.augerkenya@gmail.com" className="text-blue-300 hover:underline">
                info.augerkenya@gmail.com
              </a>
            </p>

            <div className="border-t border-gray-600 my-6"></div>

            <h3 className="text-3xl font-semibold text-blue-300 flex items-center">
              🕒 Business Hours
            </h3>
            <p className="mt-2 text-gray-300">Monday - Friday: 8:30 AM - 5:00 PM</p>
            <p className="mt-2 text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="mt-2 text-gray-300">Sunday: Closed</p>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://wa.me/254713182989"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <FaWhatsapp className="mr-3 text-2xl" /> Chat with Us on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* CSS Animation for Border Glow */}
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #0033CC; box-shadow: 0 0 15px #0033CC; }
          50% { border-color: #6600CC; box-shadow: 0 0 25px #6600CC; }
          100% { border-color: #0033CC; box-shadow: 0 0 15px #0033CC; }
        }

        .animate-border-glow {
          animation: borderGlow 3s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default Contact;
