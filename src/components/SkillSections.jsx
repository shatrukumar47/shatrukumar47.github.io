import React from "react";
import "../componentsStyles/SkillSections.css";
import SkillCards from "./SkillCards";

const SkillSections = ({ item }) => {
  return (
    <div className="section-container">
      <h1>{item?.section}</h1>
      <div className="section-skills">
        {item?.skills?.map((skill, index) => {
          return (
            <SkillCards key={index} image={skill?.image} title={skill?.title} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillSections;
