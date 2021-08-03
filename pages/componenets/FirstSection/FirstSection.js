import React, { useEffect } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import { Col,Row,Container } from "react-bootstrap";
import hljs from "highlight.js";

import zero from "../../../public/images/0.png";
import one from "../../../public/images/1.png";
import two from "../../../public/images/2.png";
import three from "../../../public/images/3.png";
import four from "../../../public/images/4.png";
import five from "../../../public/images/5.png";
import Group from "../../../public/images/Group.png";
import Girl from "../../../public/images/girl.png";

const FirstSection = () => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <h1>One Programming Language</h1>
        <h4>
          One (onelang) is an open-source system programming language that makes
          it easy to build reliable, efficient and performant software.
        </h4>
      </header>
        <pre>
          <code className={`${styles.code} js`}>
          {`fetch('{url}')
    .then(response => console.log(response));
`}
          </code>
        </pre>
      <div className={styles.box}>
        <input type="text" />
        <input type="submit" value="Try it now" />
      </div>
      <small className={styles.small}>
        Free 30-days trial, no credit card required
      </small>
        <Container className={styles.images}>
          <Row>
            <Col xs={4} md={2}>
            <Image src={zero} />
            </Col>
            <Col xs={4} md={2}>
            <Image src={one} />
            </Col>
            <Col xs={4} md={2}>
            <Image src={two} />
            </Col>
            <Col xs={4} md={2}>
            <Image src={three} />
            </Col>
            <Col xs={4} md={2}>
            <Image src={four} />
            </Col>
            <Col xs={4} md={2}>
            <Image src={five} />
            </Col>
          </Row>
        </Container>
   
      <p className={styles.text2}>
        Their teams and hundreds more are using Popwork - in person or remote.
      </p>
      <div className={styles.vector}><Image  src={Group}/></div>
      <div className={styles.box2}>
        <p>
          Every week, Popwork asks a few simple questions to your team about
          what matters. It’s what we call a check-in. ✌️{" "}
        </p>
        <p>
          Popwork is also an intuitive workspace to prepare 1-to-1 meetings,
          share feedback and follow up on topics week after week.
        </p>
      </div>
      <div className={styles.girl}><Image src={Girl} /></div>
    </div>
  );
};

export default FirstSection;
