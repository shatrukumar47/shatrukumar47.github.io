import React from "react";
import "../componentsStyles/ProjectCard.css";
import ProjectCarousel from "./ProjectCarousel";
import { FaPlaneDeparture, FaGithub } from "react-icons/fa6";

const ProjectCard = ({ item }) => {
  return (
    <div className="card-container">
      {/* Details - set the height same as Carousel */}
      <div className="project-details" style={{ height: "300px" }}>
        <h3 style={{ color: "#C651CD", margin: "5px auto" }}>
          {item?.title} App
        </h3>
        <p style={{ fontSize: "15px" }}>{item?.description}</p>
        <h4 style={{ color: "#C651CD", margin: "5px auto" }}>Tech Stacks</h4>
        <p style={{ fontSize: "13px" }}>{item.techStacks.join(" | ")}</p>
      </div>

      {/* Carousel  */}
      <ProjectCarousel
        slides={item?.images}
        w={"100%"}
        h={"300px"}
        dotSize={"12px"}
        infinity={true}
        delay={2000}
      />
      {/* Buttons  */}
      <div className="button-group">
        <div
          className="github-button"
          onClick={() => {
            window.open(item.githublink, "_blank");
          }}
        >
          <FaGithub />
          <button>Code</button>
        </div>
        <div
          className="live-button"
          onClick={() => {
            window.open(item.livelink, "_blank");
          }}
        >
          <FaPlaneDeparture />
          <button>Live</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
