import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from "./components/Footer"
import { ProductsPage } from './components/Products';
import Contact from './components/Contact'
import { ParallaxProvider } from "react-scroll-parallax";
// import video from '../assets/Snapinsta.app_video_122272268_306950908851306_8304510876151820017_n.mp4';

function App() {
  // const [loading, setLoading] = useState(true);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 7000); 
  //   return () => clearTimeout(timer);
  // }, []);

  // const startVideo = () => {
  //   // Play the video as soon as the user interacts
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen" onClick={startVideo}>
  //       <video autoPlay loop 
  //              ref={videoRef}
  //              className="absolute bg-black top-0 left-0 w-full h-full object-cover z-[-1]"
  //              style={{ zIndex: -1 }}>
  //         <source src={video} type="video/mp4" />
  //         Your browser does not support the video tag.
  //       </video>
  //     </div>
  //   );
//  

  return (
    <div className="App">
      <ParallaxProvider>
      <Landing />
      <Navbar />
      <ProductsPage />
      <About/>
      <Contact/>
      <Footer/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
