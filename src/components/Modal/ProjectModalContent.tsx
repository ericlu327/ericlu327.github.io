import React from "react";
import "./ProjectModalContent.css";
import { ProjectCarouselCard } from "../../types";
import { ReactComponent as ArrowUpRight } from "../../assets/arrow-up-right.svg";

type ProjectModalContentProps = {
  projectData: ProjectCarouselCard | undefined;
};

const ProjectModalContent = (props: ProjectModalContentProps) => {
  return (
    <div className="project-modal-content">
      {/* <img
        className="project-modal-img"
        src={props.projectData?.image}
        alt={props.projectData?.title}
      /> */}
      <div className="project-modal-header hori-flex">
        <h1 className="project-modal-title">{props.projectData?.title}</h1>
        <button
          name="View Project"
          aria-label="View Project"
          className="pm cc__instant-link-btn fill-transition-btn"
          onClick={() => window.open(props.projectData?.projectLink, "_blank")}
        >
          <p>View Project</p>
          <ArrowUpRight />
        </button>
      </div>
      <p className="project-modal-description">
        {props.projectData?.fullDescription
          ? props.projectData?.fullDescription
          : props.projectData?.description}
      </p>
      <div className="pm skills-container hori-flex">
        {props.projectData?.skillsUsed.map((skill, index) => {
          return (
            <p key={index} className="skill">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectModalContent;
