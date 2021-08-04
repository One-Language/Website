import React from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import avatar1 from "../../../public/images/avatar1.png";
import avatar2 from "../../../public/images/avatar2.png";
import avatar3 from "../../../public/images/avatar3.png";
import avatar4 from "../../../public/images/avatar4.png";

const ThirdSection = () => {
  return (
      <>
    <div className={styles.body}>
      <header>
        <h2 className={styles.header}>Is Popwork right for my team ?</h2>
      </header>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col md={3}>
              <Image src={avatar1} alt='avatar'/>
              <p>C-Levels</p>
              <p>Create the conditions needed for effective management at all levels of the company</p>
          </Col>
          <Col md={3}>
              <Image src={avatar2} alt='avatar'/>
              <p>Senior managers</p>
              <p>Gain time and boost your team’s performance and engagement week after week</p>
          </Col>
          <Col md={3}>
              <Image src={avatar3} alt='avatar'/>
              <p>Junior managers</p>
              <p>Start off on the right foot and rely on a simple and proven management framework</p>
          </Col>
          <Col md={3}>
              <Image src={avatar4} alt='avatar'/>
              <p>Remote managers</p>
              <p>Maintain close contact with your team remotely while developing autonomy</p>
          </Col>
        </Row>
      </Container>
    <div className={styles.bottom}></div>
    </div>

    </>
  );
};

export default ThirdSection;
