import React from "react";
import "../componentsStyles/ResumeButton.css";
import { IoMdDownload } from "react-icons/io";

const ResumeButton = ({onClick}) => {
  return (
    <button className="pushable" onClick={onClick}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <div className="front">
        <p>Resume </p>
        <div className="icon"><IoMdDownload /></div>
      </div>
    </button>
  );
};

export default ResumeButton;
