import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-start justify-start px-10 mt-[-400px]" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <ProjectCard
            src="/food_project.jpeg"
            title="NutrieGenie - An AI Dietitian"
            description="Discover the perfect balance of taste and nutrition with our AI-powered dietitian project. Built with the MERN stack and Gemini API, this innovative platform allows users to effortlessly search for a wide range of recipes, add their own culinary creations, and meticulously track their nutrient intake. Whether you're aiming to meet specific dietary goals or simply exploring new dishes, this project provides a seamless and personalized experience to help you stay on track with your health and wellness journey."
            link="https://ai-dietitian.vercel.app/"
          />
          <div style={{ zIndex: 1000 }}>
            <a
              href="https://ai-dietitian.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-30 py-2 px-4 rounded cursor-pointer inline-block"
              style={{ zIndex: 1000 }}
            >
              View Project
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectCard
            src="/weather.jpeg"
            title="Weather App"
            description="Immerse yourself in the elements with our cutting-edge Weather App, built with React and powered by the AccuWeather API. This project not only provides precise current weather conditions and forecasts but also features live backgrounds that adapt to real-time weather changes. Feel the warmth of a sunny day, the calm of a gentle snowfall, or the excitement of a thunderstorm, all through stunning visuals that transform your screen. Designed to keep you informed and captivated, this app turns everyday weather updates into a vibrant and engaging experience."
            link="https://weather-app-flame-beta-12.vercel.app/"
          />
          <div style={{ zIndex: 1000 }}>
            <a
              href="https://weather-app-flame-beta-12.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-30 py-2 px-4 rounded cursor-pointer inline-block"

              style={{ zIndex: 1000 }}
            >
              View Project
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectCard
            src="/blog.jpeg"
            title="Blogify - A Blogging Platform"
            description="Dive into the world of content creation with our robust blogging platform - Blogify, developed using the MERN stack. This comprehensive platform enables users to read, create, and edit blogs seamlessly. Equipped with user authentication, it ensures secure access and personalized experiences. Whether you’re sharing your thoughts, crafting insightful articles, or simply exploring engaging content, this platform provides a dynamic and user-friendly environment to meet all your blogging needs."
            link="https://blogify-theta-one.vercel.app/"
          />
          <div style={{ zIndex: 1000 }}>
            <a
              href="https://blogify-theta-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-30 py-2 px-4 rounded cursor-pointer inline-block"
              style={{ zIndex: 1000 }}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
