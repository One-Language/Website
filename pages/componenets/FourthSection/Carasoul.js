import React from "react";
// import Carousel, {
//   autoplayPlugin,
//   slidesToShowPlugin,
// } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Carasoul.module.css";
import ad2 from "../../../public/images/ad2.png";
import logo1 from "../../../public/images/logo1.png";
import pp1 from "../../../public/images/pp1.png";
import pp2 from "../../../public/images/pp2.png";
import pp3 from "../../../public/images/pp3.png";
import pp4 from "../../../public/images/pp4.png";
import pp5 from "../../../public/images/pp5.png";
import pp6 from "../../../public/images/pp6.png";
import pp7 from "../../../public/images/pp7.png";
import pp8 from "../../../public/images/pp8.png";
import pp9 from "../../../public/images/pp9.png";
import Comment from "./Comment";
import { Col, Row } from "react-bootstrap";

const Carasoul = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="margin:20px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />

        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </Carousel>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />

        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </Carousel>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />
        <Comment
          name={"Antoine Loredo"}
          logo={logo1}
          pic={pp1}
          comment={
            "After a few weeks, I can’t imagine managing my team without Popwork."
          }
          role={"manger"}
        />

        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </Carousel>
    </>
  );
};

export default Carasoul;
