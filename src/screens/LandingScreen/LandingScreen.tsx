import "./LandingScreen.css";
import IntroSection from "./sections/IntroSection/IntroSection";
import Navbar from "../../components/Navbar/Navbar";
import { Coord } from "../../types";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";

type LandingScreenProps = {
  interactiveStarIsEnabled: boolean;
  moveInteractiveStar: () => void;
  starCurrXY: Coord;
};

const LandingScreen = (props: LandingScreenProps) => {
  return (
    <div
      className="landing-screen"
      onMouseMove={
        props.interactiveStarIsEnabled ? props.moveInteractiveStar : undefined
      }
      onTouchMove={
        props.interactiveStarIsEnabled ? props.moveInteractiveStar : undefined
      }
    >
      <Navbar />
      <IntroSection
        sectionID="intro"
        starCurrXY={props.starCurrXY}
        istarEnabled={props.interactiveStarIsEnabled}
      />
      <ExperienceSection sectionID="experience" />
      <ProjectsSection sectionID="projects" />
      <SkillsSection sectionID="skills" />
      <ContactSection sectionID="contact" />
    </div>
  );
};

export default LandingScreen;
