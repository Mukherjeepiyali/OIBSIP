"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";

const HeroContent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formspree.io/f/mgvwkklk"; // Your Formspree URL

    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "name";
    nameInput.value = "Piyali Mukherjee";
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "email";
    emailInput.value = (e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement).value;
    form.appendChild(emailInput);

    const messageInput = document.createElement("input");
    messageInput.type = "hidden";
    messageInput.name = "message";
    messageInput.value = (e.currentTarget.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement).value;
    form.appendChild(messageInput);

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-80 w-full z-[20]"
    >
      <div className="h-full w-full flex gap-5 justify-center m-auto text-start">
        <div className="flex flex-col gap-6 mt-6 max-w-[600px] h-auto">
          <div className="mb-6">
            <span
              className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent font-bold inline-block"
              style={{
                whiteSpace: "nowrap",
                fontSize: "clamp(30px, 5vw, 60px)", // Responsive font size
              }}
            >
              PIYALI&nbsp;MUKHERJEE,
            </span>
          </div>
          <div className="text-[36px] lg:text-[60px] whitespace-nowrap">
            <TypeAnimation
              sequence={[
                "a Full Stack Developer",
                3000,
                "a Creative Designer",
                3000,
                "a Software Engineer",
                3000,
                "a Passionate Learner",
                3000,
              ]}
              speed={50}
              className="text-white"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 5, duration: 0.5 }}
            className="text-center mt-6"
          >
            {!showForm ? (
              <motion.a
                className="py-4 px-8 text-lg button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] mx-auto block"
                onClick={handleClick}
                style={{ marginLeft: "-20px" }} // Shift to the left
              >
                Let&apos;s Talk
              </motion.a>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-[600px] mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-2 text-white bg-transparent border border-white rounded"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="p-2 text-white bg-transparent border border-white rounded"
                />
                <button
                  type="submit"
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8 }}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        ></motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="w-full h-full flex justify-center items-center mt-12"
      >
        <motion.div
          className="fixed w-[60vh] h-[60vh] rounded-full"
          animate={{
            y: [0, -10, 0], // Up, then down
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div
            className=" inset-0 bg-black opacity-2 rounded-full"
            style={{ zIndex: -1 }}
          />
          <Spline
            scene="https://prod.spline.design/B9aGwip6dXCIXFGN/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
