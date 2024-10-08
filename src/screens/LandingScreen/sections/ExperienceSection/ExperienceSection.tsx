import React from "react";
import "./ExperienceSection.css";
import { ExperienceSectionData } from "../../../../data";
import { LandingPageSectionProps } from "../../../../types";
import Timeline from "../../../../components/Timeline/Timeline";
import TimelineSegment from "../../../../components/Timeline/TimelineSegment";
import { motion } from "framer-motion";

type ExperienceSectionProps = {} & LandingPageSectionProps;

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <div className="experience-section noise" id={props.sectionID}>
      <motion.h1
        className="experience-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        viewport={{ once: true, amount: 1 }}
      >
        discover my career journey
      </motion.h1>
      <Timeline>
        {ExperienceSectionData.slice(0)
          .reverse()
          .map((experience, index) => (
            <TimelineSegment key={index} index={index} data={experience} />
          ))}
      </Timeline>
    </div>
  );
};

export default ExperienceSection;
