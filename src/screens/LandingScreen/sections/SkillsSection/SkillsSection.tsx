import { useRef } from "react";
import "./SkillsSection.css";
import { LandingPageSectionProps } from "../../../../types";
import { SkillsSectionData } from "../../../../data";
import { motion, useInView } from "framer-motion";

type SkillsSectionProps = {} & LandingPageSectionProps;

const SkillsSection = (props: SkillsSectionProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.25, once: true });

  return (
    <div className="skills-section noise" id={props.sectionID}>
      <motion.h1
        className="skills-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        viewport={{ once: true, amount: 1 }}
      >
        technical skills
      </motion.h1>
      <div className="skills-section-wrapper">
        <div className="skills-section-content" ref={containerRef}>
          {SkillsSectionData.map((category, index) => {
            return (
              <div key={index} className="skills-section-category-container">
                <motion.h2
                  className="skills-section-category-title"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(-20px)",
                    transition: "all 0.5s ease-in-out",
                    transitionDelay: "0.25s",
                  }}
                >
                  {category.categoryTitle}
                </motion.h2>
                <div className="skills-section-category">
                  {category.skills.map((skill, index) => {
                    return (
                      <motion.div
                        key={index}
                        className="skill-card glass"
                        style={{
                          opacity: isInView ? 1 : 0,
                          transition: "all 0.5s ease-in-out",
                          transitionDelay: `${0.5 + index * 0.1}s`,
                        }}
                      >
                        <p className="skill-card-name">{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
