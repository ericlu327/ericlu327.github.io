import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ProjectCarouselCard } from "../../types";
import CarouselCard from "./CarouselCard";
import { ReactComponent as ArrowRight } from "../../assets/slider-right-arrow.svg";
import { ReactComponent as ArrowLeft } from "../../assets/slider-left-arrow.svg";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { motion } from "framer-motion";

type CarouselProps = {
  data: ProjectCarouselCard[];
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContentData: React.Dispatch<
    React.SetStateAction<ProjectCarouselCard | undefined>
  >;
};

const Carousel = (props: CarouselProps) => {
  const openModal = (cardData: ProjectCarouselCard) => {
    props.setModalContentData(cardData);
    props.setModalShow(true);
  };

  const { width } = useWindowDimensions();

  const calcInitialSlide = () => {
    if (width > 900) {
      return props.data.length / 2;
    }
    return 0;
  };

  return (
    <motion.div
      className="custom-swiper-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Swiper
        className="swiper_container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={calcInitialSlide()}
        slidesPerView={"auto"}
        // loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {props.data.map((card) => {
          return (
            <SwiperSlide key={card.id} className="swiper-slide">
              <CarouselCard cardData={card} openModal={openModal} />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
