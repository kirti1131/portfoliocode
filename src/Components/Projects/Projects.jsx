import React from "react";
import ProjectCard from "./ProjectCard";
import portfolioImg from "../../assets/Portfolio.png";
import amazonImg from "../../assets/Amazon.png";
import Chatimg from "../../assets/Chat-app.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio"
          main="This is a Portfolio website created with vite and Tailwind CSS"
          img={portfolioImg}
          linkCode={"https://realtime-chat-app-7v77.onrender.com"}
          code={"https://realtime-chat-app-7v77.onrender.com"}
        />
        <ProjectCard
          title="Amazon Clone"
          main="This is an Amazon Clone created with Html, CSS and JavaScript."
          img={amazonImg}
          linkCode={"https://kirti1131.github.io/Amazon_Clone_html/"}
          code={"https://github.com/kirti1131/Amazon_Clone_html"}
        />
        <ProjectCard
          title=" Realtime-Chat Application"
          main="This is a real-time chat application using MERN Stack"
          img={Chatimg}
          linkCode={"https://realtime-chat-app-7v77.onrender.com"}
          code={"https://github.com/kirti1131/realtime-chat-app"}
        />
      </div>
    </div>
  );
};

export default Projects;
