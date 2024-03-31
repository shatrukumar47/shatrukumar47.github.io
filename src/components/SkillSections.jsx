import React from "react";
import "../componentsStyles/SkillSections.css";
import SkillCard from "./SkillCard";

const SkillSections = ({ item }) => {
  return (
    <div className="section-container">
      <h1>{item?.section}</h1>
      <div className="section-skills">
        {item?.skills?.map((skill, index) => {
          return (
            <SkillCard key={index} image={skill?.image} title={skill?.title} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillSections;
