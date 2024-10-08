import React, { useRef } from "react";
import "./Timeline.css";
import { TimelineElementExperience } from "../../types";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { motion } from "framer-motion";

type TimelineSegmentProps = {
  key?: any;
  index: number;
  data: TimelineElementExperience;
};

export const timelineHeight = 350;

const TimelineSegment = (props: TimelineSegmentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const topOffset = 50;
  const { width } = useWindowDimensions();

  return width > 1100 ? (
    <li
      className="timeline-segment"
      style={{
        height: timelineHeight,
        top: props.index * (timelineHeight - 2) + topOffset + "px",
      }}
      data-content={props.index + 1}
    >
      <motion.div
        className="content glass"
        ref={contentRef}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.75, delay: 0.25 },
        }}
        initial={{
          opacity: 0,
          x: props.index % 2 === 0 ? "5%" : "-5%",
          y: "-50%",
        }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.025 }}
      >
        <div className="content-inner">
          <div className="hori-flex company-info-container">
            <div className="company-logo-container">
              <img
                src={props.data.companyLogo}
                alt={props.data.companyName + " Logo"}
                className="company-logo"
              />
            </div>
            <div className="vert-flex company-text-info">
              <h3 className="company-name">{props.data.companyName}</h3>
              <h4 className="job-position">{props.data.jobPosition}</h4>
              <p className="job-dates">{props.data.date}</p>
            </div>
          </div>
          {typeof props.data.description === "string" ? (
            <p className="description">{props.data.description}</p>
          ) : (
            <ul className="description bulleted">
              {(props.data.description as string[]).map((bulletLine, index) => (
                <li className="bullet" key={index}>
                  {bulletLine}
                </li>
              ))}
            </ul>
          )}
          <div className="skills-container hori-flex">
            {props.data.skillsUsed.map((skill, index) => (
              <div key={index} className="skill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </li>
  ) : (
    <div className="mobile-content-segment-container">
      <div className="mobile-timeline-segment-line">
        <motion.div
          className="mobile-timeline-segment-dot"
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.75, delay: 0, type: "spring" },
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          viewport={{ once: true, amount: 0.85 }}
        />
      </div>
      <motion.div
        className="mobile content glass"
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.75, delay: 0.5 },
        }}
        initial={{
          opacity: 0,
          x: "5%",
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="content-inner">
          <div className="hori-flex company-info-container">
            <div className="company-logo-container">
              <img
                src={props.data.companyLogo}
                alt={props.data.companyName + " Logo"}
                className="company-logo"
              />
            </div>
            <div className="vert-flex company-text-info">
              <h3 className="company-name">{props.data.companyName}</h3>
              <h4 className="job-position">{props.data.jobPosition}</h4>
              <p className="job-dates">{props.data.date}</p>
            </div>
          </div>
          {typeof props.data.description === "string" ? (
            <p className="description">{props.data.description}</p>
          ) : (
            <ul className="description bulleted">
              {(props.data.description as string[]).map((bulletLine, index) => (
                <li className="bullet" key={index}>
                  {bulletLine}
                </li>
              ))}
            </ul>
          )}
          <div className="skills-container hori-flex">
            {props.data.skillsUsed.map((skill, index) => (
              <div key={index} className="skill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineSegment;
