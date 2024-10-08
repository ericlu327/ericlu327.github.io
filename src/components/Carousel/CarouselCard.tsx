import React from "react";
import { ProjectCarouselCard } from "../../types";
import "./Carousel.css";
import { ReactComponent as ArrowUpRight } from "../../assets/arrow-up-right.svg";

type CarouselCardProps = {
  key?: any;
  cardData: ProjectCarouselCard;
  openModal: (cardData: ProjectCarouselCard) => void;
};

const CarouselCard = (props: CarouselCardProps) => {
  return (
    <div className="carousel-card glass">
      <div className="carousel-card__image">
        <img src={props.cardData.image} alt={props.cardData.title} />
      </div>
      {/* <p className="carousel-card__title">{props.cardData.title}</p>
      <p className="carousel-card__description">{props.cardData.description}</p> */}
      <div className="carousel-card__instant-links">
        <button
          name="Learn More"
          aria-label="Learn More"
          className="cc__instant-link-btn fill-transition-btn"
          onClick={() => props.openModal(props.cardData)}
        >
          <p>Learn More</p>
        </button>
        <button
          name="View Project"
          aria-label="View Project"
          className="cc__instant-link-btn fill-transition-btn"
          onClick={() => window.open(props.cardData.projectLink, "_blank")}
        >
          <p>View Project</p>
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
