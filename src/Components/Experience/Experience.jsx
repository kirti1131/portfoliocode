import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap  md:w-2/5 gap-8 md:p-12" py-10>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2x1">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer ,Google</h2>
              <p className="text-sm leadinf-tight font-thin">
                Fresher, Pursuing my bachelors degree in Computer Science
              </p>
              <ul className="text-sm p-2">
                <li>- Currently a Student</li>
                <li>- exceled in Web Development</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer ,Google</h2>
              <p className="text-sm leadinf-tight font-thin">
                Fresher, Pursuing my bachelors degree in Computer Science
              </p>
              <ul className="text-sm p-2">
                <li>- Currently a Student</li>
                <li>- exceled in Web Development</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer ,Google</h2>
              <p className="text-sm leadinf-tight font-thin">
                Fresher, Pursuing my bachelors degree in Computer Science
              </p>
              <ul className="text-sm p-2">
                <li>- Currently a Student</li>
                <li>- exceled in Web Development</li>
                <li> build an responsive Amazon Clone</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
