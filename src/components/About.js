import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Parallax effect for the background
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div id='about' className="w-full lg:h-full h-full m-auto flex items-center justify-center py-20 bg-black relative overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black z-0"
        style={{ transform: 'translateY(0)' }}
      />

      {/* Content */}
      <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2 relative z-10">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
          {/* Text Section */}
          <motion.div
            ref={ref}
            className="lg:w-[60%] p-8 w-full h-full shadow-2xl shadow-blue-500/20 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl bg-black/50 backdrop-blur-md border border-blue-500/20"
            initial="hidden"
            animate={controls}
            variants={fadeInLeft}
          >
            <h2 className="text-4xl text-center text-blue-500 font-bold px-4 py-1 md:mt-0 mt-10">
              About Us
            </h2>
            <p className="md:text-3xl text-2xl text-center text-white font-bold my-5">
              We are Auger BMW
            </p>
            <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 text-gray-300">
              Welcome to Auger BMW, your trusted partner for genuine and high-quality BMW spare parts in Nairobi, Kenya. Established in 2018, we have built a reputation for reliability, expertise, and excellent customer service.
              <br /><br />
              Located on Lusaka Road, opposite Total Petrol Station, our shop is dedicated to providing BMW owners with the best spare parts to keep their vehicles running smoothly. Whether you need engine components, suspension parts, or accessories, we ensure top-notch products at competitive prices.
              <br /><br />
              In addition to BMW, we also operate other shops specializing in Mercedes-Benz cars and trucks, making us a one-stop destination for premium European vehicle parts. Our commitment to quality and customer satisfaction sets us apart in the industry.
              <br /><br />
              Visit us today and experience the Auger BMW difference where performance meets reliability!
            </p>

            {/* Read More Button */}
            <motion.button
              className="lg:mt-10 mt-6 lg:px-8 px-6 lg:py-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg lg:text-xl text-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Interactive Feature Section */}
          <motion.div
            className="lg:w-[40%] w-full h-full flex flex-col justify-center items-center"
            initial="hidden"
            animate={controls}
            variants={fadeInRight}
          >
            {/* 3D Card with Hover Effect */}
            <motion.div
              className="w-full h-[20rem] bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-2xl flex flex-col justify-center items-center p-6 hover:shadow-blue-500/50 transition-shadow relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />

              <h3 className="text-3xl text-white font-bold text-center mb-4">
                Why Choose Us?
              </h3>
              <p className="text-lg text-white text-center">
                We offer the best quality BMW spare parts, exceptional customer service, and competitive prices. Your satisfaction is our priority!
              </p>
            </motion.div>

            {/* Stats Section */}
            <div className="w-full grid grid-cols-2 gap-6 mt-8">
              <motion.div
                className="p-6 bg-black/50 backdrop-blur-md rounded-xl shadow-lg flex flex-col justify-center items-center hover:shadow-blue-500/30 transition-shadow border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl text-blue-500 font-bold">
                  5+
                </h3>
                <p className="text-lg text-white text-center">
                  Years of Experience
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-black/50 backdrop-blur-md rounded-xl shadow-lg flex flex-col justify-center items-center hover:shadow-blue-500/30 transition-shadow border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl text-blue-500 font-bold">
                  1000+
                </h3>
                <p className="text-lg text-white text-center">
                  Happy Customers
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles (Optional) */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;