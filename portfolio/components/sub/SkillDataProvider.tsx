"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: [0, -15, 0], // Floating effect
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
        opacity: {
          duration: 0.5,
          ease: 'easeInOut'
        }
      }
    }
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className="w-20 h-20 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"
      />
    </motion.div>
  );
};

export default SkillDataProvider;
