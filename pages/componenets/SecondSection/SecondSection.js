import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./SecondSection.module.css";
import box from "../../../public/images/second.png";
import box2 from "../../../public/images/second2.png";
import box3 from "../../../public/images/box3.png";
import box4 from "../../../public/images/box4.png";
import box5 from "../../../public/images/box5.png";
import box6 from "../../../public/images/box6.png";
import box7 from "../../../public/images/box7.png";
import Girl from "../../../public/images/girl2.png";
import Girl3 from "../../../public/images/girl3.png";
import Girl4 from "../../../public/images/girl4.png";

import Image from "next/image";

const SecondSection = () => {
  return (
    <div className={styles.body}>

    <Container>
      <Row className={styles.row}>
        <Col md={5}>
          <h2>
          Take your team management to the next level with well prepared
            1-to-1 meetings
          </h2>
        </Col>
        <Col>
          <Col md={{ offset: 2 }}>
            <div className={styles.firstBox}>
              <p>Popwork</p>
              <p>Time to check in with your manger</p>
              <date>Oct 20</date>
            </div>
            <Image src={box} alt="box" className={styles.box} />
          </Col>
          <div className={styles.box2}>
            <Image src={box2} alt="box" />
          </div>
          <Col md={{ offset: 2 }}>
            <div className={styles.girl}>
              <div className={styles.girlBox}>
                5 questions every week: your team members take 10 minutes to
                check in with you.
              </div>
              <Image src={Girl} alt="Girl" />
            </div>
          </Col>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col>
          <Image src={box4} alt="box3" />
          <Col md={{ offset: 1 }}>
            <div className={styles.box4}>
              <Image src={box3} alt="box3" />
            </div>
          </Col>
          <div className={styles.girl3}>
            <Image src={Girl3} alt="Girl" />
            <div className={styles.girlBox2}>
              5 questions every week: your team members take 10 minutes to check
              in with you.
            </div>
          </div>
        </Col>
        <Col md={5}>
          <h2 className={styles.header2}>
          Focus on the right topics and regularly share feedback with each
            team member
          </h2>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={5}>
          <h2>
            Turn your conversations into actions and make your team move forward
            week after week
          </h2>
        </Col>
        <Col>
          <div className={styles.girl4}>
            <div className={styles.girlBox}>
              5 questions every week: your team members take 10 minutes to check
              in with you.
            </div>
            <Image src={Girl4} alt="Girl" />
          </div>
          <Image src={box5} alt="box" />
          <Image src={box6} alt="box" />
          <Image src={box7} alt="box" />
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default SecondSection;
