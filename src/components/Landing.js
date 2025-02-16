import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";
import { PiSpeakerHigh, PiSpeakerX } from "react-icons/pi";
import backgroundVideo from '../assets/Snapinsta.app_video_48709695_340539462182670_4666753133435225402_n.mp4';

const LandingPage = () => {
  const phrases = ["Welcome to Auger BMW", "Drive with Confidence"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // ✅ Added useEffect to force play video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.log("Autoplay blocked:", error));

      // ✅ Restart video if it gets paused
      const handlePause = () => {
        video.play().catch(error => console.log("Play attempt failed:", error));
      };

      video.addEventListener("pause", handlePause);
      return () => video.removeEventListener("pause", handlePause);
    }
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* ✅ Background Video with Forced Playback */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>

      {/* ✅ Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute top-16 mt-4 left-5 z-30 bg-white/60 text-black p-3 rounded-full shadow-md hover:bg-sky-500 transition-colors"
      >
        {isMuted ? <PiSpeakerX className="w-6 h-6" /> : <PiSpeakerHigh className="w-6 h-6" />}
      </button>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-20">
        <motion.div
          className="text-center px-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Dynamic Text */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhraseIndex}
              className="mt-12 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl tracking-tighter leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                {phrases[currentPhraseIndex]}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Subheading */}
          <motion.p
            className="text-white text-lg md:text-xl mt-24 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Enhance Your Driving Experience with Reliable, High-Quality BMW parts
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link
              to="products"
              smooth={true}
              duration={600}
              offset={-60}
              className="cursor-pointer"
            >
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Explore Products
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scrolling Indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="text-white text-sm animate-bounce">
            <Link
              to="products"
              smooth={true}
              duration={600}
              offset={-50}
              className="cursor-pointer"
            >
              Scroll Down
            </Link>
          </div>
          <svg
            className="w-6 h-6 mx-auto mt-2 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
