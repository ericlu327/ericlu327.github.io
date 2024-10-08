import React, { ReactElement, useEffect } from "react";
import "./Modal.css";

type ModalProps = {
  modalContent: JSX.Element;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
};

const Modal = (props: ModalProps): ReactElement<ModalProps> => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.show]);

  return (
    <div
      className={"modal-background glass" + (props.show ? " active" : "")}
      onClick={() => {
        props.setShow(false);
      }}
    >
      <div
        className={"modal-content noise"}
        onClick={(e) => e.stopPropagation()}
        style={props.style ? props.style : {}}
      >
        {props.modalContent}
      </div>
    </div>
  );
};

export default Modal;
