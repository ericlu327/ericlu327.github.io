import React from "react";
import { ReactComponent as CodeIcon } from "../../assets/code-icon.svg";
import "./ScreenFooter.css";

const ScreenFooter = () => {
  return (
    <div className="footer-container">
      <p className="website-credits">
      </p>
      <p className="view-source hori-flex">
        <CodeIcon />
        <a
          aria-label="View source code"
          href="https://github.com/ericlu327/ericlu327.github.io"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          {"View source code"}
        </a>
      </p>
    </div>
  );
};

export default ScreenFooter;
