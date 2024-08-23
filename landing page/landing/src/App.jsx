import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import MotionPathAnimation from './components/RoutePointer/MotionPathAnimation';
import ZoomImageOnScroll from './components/CircularImage/ZoomImageOnScroll';
import SmoothScrollParallax from './components/SmoothScrollParalax/SmoothScrollParalax';



const App = () => {
 

  return (
    <>
   <HeroSection/>
   <MotionPathAnimation/>
   <ZoomImageOnScroll/>
   <SmoothScrollParallax/>
   </>
  );
};

export default App;
