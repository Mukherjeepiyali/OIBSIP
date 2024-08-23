import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string; // Added link prop
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[500px] h-[600px]">
      <Image
        src={src}
        alt={title}
        width={800}
        height={500}
        className="w-full h-[400px] object-cover"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            {title}
          </a>
        </h1>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block cursor-pointer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
