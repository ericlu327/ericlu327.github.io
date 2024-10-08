import React from "react";
import "./IntroSection.css";
import StarBackground from "../../../../components/StarBackground/StarBackground";
import { Coord, LandingPageSectionProps } from "../../../../types";
import { ReactComponent as RightArrow } from "../../../../assets/arrow-right.svg";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

type IntroSectionProps = {
  starCurrXY: Coord;
  istarEnabled: boolean;
} & LandingPageSectionProps;

const IntroSection = (props: IntroSectionProps) => {
  return (
    <div className="intro-section noise" id={props.sectionID}>
      <StarBackground
        starCurrXY={props.starCurrXY}
        istarEnabled={props.istarEnabled}
      />
      <div className="isec__left">
        <motion.div
          className="text-container"
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0,
            },
          }}
          initial={{
            opacity: 0,
            y: -75,
          }}
        >
          <motion.h1
            className="title"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            hi, i'm eric!
          </motion.h1>
          <motion.h2
            className="subtitle"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.75,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            <Link
              to={"/#projects"}
              smooth
              className="intro-link animated-underline"
            >
              software developer
            </Link>
            <div className="bullet-dot" />
            <a
              aria-label="Georgia Tech"
              className="intro-link animated-underline"
              href="https://www.gatech.edu"
              target="_blank"
              rel="noreferrer"
            >
              cs student
            </a>
            <div className="bullet-dot" />
            <Link
              to="/#skills"
              smooth
              className="intro-link animated-underline"
            >
              tech enthusiast
            </Link>
          </motion.h2>
          <motion.div
            className="cta-container"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            <Link
              className="cta-button fill-transition-btn"
              to="/#experience"
              smooth
            >
              follow my career <RightArrow className="cta-icon" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
