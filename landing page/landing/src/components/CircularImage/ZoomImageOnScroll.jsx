import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import './ZoomImageOnScroll.css';
import Image from '../../assets/Memories.webp';

const HeroSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      }
    });

    timeline
      .to(".image-container img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero"></section>
      </div>
      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
