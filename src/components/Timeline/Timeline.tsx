import React, { Children } from "react";
import { timelineHeight } from "./TimelineSegment";
import useWindowDimensions from "../../utils/useWindowDimensions";

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline = (props: TimelineProps) => {
  const { width } = useWindowDimensions();

  return width > 1100 ? (
    <div
      className="timeline-container"
      style={{
        marginTop: 85000 / (width * 0.8) + 15,
        height: `calc(${
          (Children.count(props.children) + 1) * timelineHeight
        }px - 5vw)`,
      }}
    >
      <ul className="timeline">{props.children}</ul>
    </div>
  ) : (
    <div className="mobile-timeline-container">
      <ul className="mobile timeline">{props.children}</ul>
    </div>
  );
};

export default Timeline;
