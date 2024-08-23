import React from 'react';
import landing_background from '../assets/landing_background.mp4';
import Slider from './Slider/Slider';
import Navigation from '../components/Navigation';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navigation />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={landing_background}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-4">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 font-secondary bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-green-500"
        >
          Experience India Like Never Before
        </h1>
        <div className="w-full max-w-6xl">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;