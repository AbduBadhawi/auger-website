import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import { MdOutlineTouchApp } from "react-icons/md";
import { motion } from "framer-motion";
import product1 from "../assets/products/11377548387_1024x-removebg-preview.png"
import product2 from "../assets/products/2-x-sachs-front-shock-absorber-for-bmw-e90-e91-e92-e93-with-standard-suspension-removebg-preview.png"
import product3 from "../assets/products/226129_x600-removebg-preview.png"
import product4 from "../assets/products/31126775967-removebg-preview.png"
import product5 from "../assets/products/5WK97508-01_1800x1800_c297b806-4e67-4244-91f3-cfc2f3f24817_1200x1200-removebg-preview.png"
import product7 from "../assets/products/617o1eUValL-removebg-preview.png"
import product8 from "../assets/products/61QIpqscp0S-removebg-preview.png"
import product9 from "../assets/products/660442_x600-removebg-preview.png"
import product10 from "../assets/products/81xXTpx3DuL-removebg-preview.png"
import product11 from "../assets/products/FR7618512-Engine-Sump-For-BMW-N20-Engine-11137618512-1-removebg-preview.png"
import product12 from "../assets/products/FR7953129-Oil-Filter-for-BMW-N20-N52-N53-N54-and-N55-engines.-11428683196-2-1-removebg-preview.png"
import product13 from "../assets/products/FR8635089-Water-Pump-for-BMW-N20-Engine-11517597715-1-removebg-preview.png"
import product14 from "../assets/products/images-removebg-preview (1).png"
import product15 from "../assets/products/images-removebg-preview (2).png"
import product16 from "../assets/products/images-removebg-preview (3).png"
import product17 from "../assets/products/images-removebg-preview.png"
import product18 from "../assets/products/mahle-air-filter-for-bmw-e36-e46-e39-e38-x3-e83-z4-e85-z3-removebg-preview.png"
import product19 from "../assets/products/multilistingCASTROLM-removebg-preview.png"
import product20 from "../assets/products/s-l1200-removebg-preview (1).png"
import product21 from "../assets/products/s-l1200-removebg-preview (2).png"
import product22 from "../assets/products/s-l1200-removebg-preview (3).png"
import product23 from "../assets/products/s-l1200-removebg-preview.png"
export const ProductsPage = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={20}
      images={[
        product1,
        product2,
        product3,
        product4,
        product5,
        product7,
        product8,
        product9,
        product10,
        product11,
        product12,
        product13,
        product14,
        product15,
        product16,
        product17,
        product18,
        product19,
        product20,
        product21,
        product22,
        product23,
      ]}
      
    >
      {/* Title */}
      <h1 className="text-blue-600 dark:text-blue-400 absolute top-5 left-1/2 -translate-x-1/2 text-2xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white z-20 whitespace-nowrap overflow-hidden">
        Our Products
      </h1>

      {/* BMW-Inspired Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={{
          background: [
            "linear-gradient(120deg, #000428, #004e92)", // Deep BMW Blue
            "linear-gradient(120deg, #000428, #001f3f)", // Dark Midnight Blue
            "linear-gradient(120deg, #000428, #004e92, #00aaff)", // BMW Blue Blend
            "linear-gradient(120deg, #000428, #002a5c, #004e92)", // Cool Blue Mix
            "linear-gradient(120deg, #000428, #001f3f)", // Midnight Blue Again
          ],
        }}
        transition={{
          duration: 10, // Smooth premium transitions
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          position: "absolute",
          zIndex: -1,
          backgroundSize: "400% 400%", // Creates a smooth shifting effect
        }}
      />

      <section className="grid h-screen w-full place-content-center relative">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-white z-10">
          <span className="hidden sm:inline">
            <FiMousePointer />
          </span>
          <span className="sm:hidden">
            <MdOutlineTouchApp />
          </span>
          <span className="text-blue-500 dark:text-blue-400 hidden sm:inline">
            Hover me
          </span>
          <span className="sm:hidden">Tap me</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({ children, images, renderImageBuffer, rotationRange }) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(selector, { opacity: [1, 0] }, { ease: "linear", duration: 2, delay: 5 });

    imageRenderCount.current += 1;
  };

  return (
    <div id='products' ref={scope} className="relative overflow-hidden h-screen w-full" onMouseMove={handleMouseMove}>
      {children}
      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-white bg-slate-200 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
