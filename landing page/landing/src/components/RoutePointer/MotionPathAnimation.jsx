// src/components/RoutePointer/MotionPathAnimation.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const MotionPathAnimation = () => {
  const motionPathRef = useRef(null);
  const pointerRef = useRef(null);
  const motionSVGRef = useRef(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const motionPath = motionPathRef.current;
    const pointer = pointerRef.current;
    const motionSVG = motionSVGRef.current;

    gsap.set(motionSVG, { scale: 1, autoAlpha: 1 });
    gsap.set(pointer, { transformOrigin: '50% 50%' });

    gsap.set(pointer, { x: 800, y: 20, rotation: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: motionSVG,
        start: 'top center',
        end: '+=3000',
        scrub: 3,
        onUpdate: (self) => {
          if (self.direction > 0) {
            gsap.to(pointer, { rotation: 90 });
          } else {
            gsap.to(pointer, { rotation: -90 });
          }
        },
      },
    });

    tl.to(pointer, {
      motionPath: {
        path: motionPath,
        align: motionPath,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: 'power1.inOut',
      duration: 10,
    });

    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const locations = [
    { day: 'Day 1', name: 'Where the Himalayas kiss the sky and ancient history whispers in every breeze', image: 'https://wallpapers.com/images/hd/4k-mountain-fujjoqqen0rsvm76.jpg' },
    { day: 'Day 2', name: 'Immerse in the rhythmic dance of temples, lush landscapes, and aromatic spices', image: 'https://www.oyorooms.com/blog/wp-content/uploads/2018/08/shutterstock_1034752978.jpg' },
    { day: 'Day 3', name: 'Discover a land of tranquil rivers, vibrant festivals, and rich cultural tapestries.', image: 'https://skylines.co.in/wp-content/uploads/2023/04/North-East-India-1.jpg' },
    { day: 'Day 4', name: 'Experience the sun-kissed coasts, vibrant markets, and majestic forts of a colorful land.', image: 'https://assets.zeezest.com/blogs/PROD_Pro%20desert_1664882566527.jpg' },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      {locations.map((location, index) => (
        <div key={index} className="flex items-center h-[100vh]">
          <div className="w-1/2 p-8">
            <h2
              ref={(el) => (textRefs.current[index] = el)}
              className="text-white text-4xl font-secondary"
            >
              {location.name}
            </h2>
          </div>
          <div className="w-1/2 h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${location.image})`,
                WebkitMaskImage: 'url(https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2014/10/mask-image.png)',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'cover',
                WebkitMaskRepeat: 'no-repeat',
              }}
            ></div>
          </div>
        </div>
      ))}

      <svg
        id="motionSVG"
        ref={motionSVGRef}
        className="absolute top-0 left-0 w-full h-[100vh] overflow-visible pointer-events-none z-20"
      >
        <path
          id="motionPath"
          ref={motionPathRef}
          d="M 820 20 C 860 40 860 80 820 120 C 682 206 840 200 860 240 C 880 280 600 324 860 360 C 1181 403 300 493 700 509 C 1100 518 300 625 700 677 C 820 657 1000 676 900 803 C 820 848 600 883 850 999 C 1000 1150 650 1350 950 1500 C 1200 1600 650 1800 950 1900 C 1250 2000 650 2200 950 2300 C 1250 2400 700 2600 1000 2700 C 1300 2800 800 3000 1000 3100"
          className="stroke-white stroke-4 fill-transparent"
          strokeDasharray="5, 5"
        />
        <polygon
          id="pointer"
          ref={pointerRef}
          points="0,0 20,10 0,20"
          fill="yellow"
        />
      </svg>
    </div>
  );
};

export default MotionPathAnimation;
