import React from "react";
import styles from "./FourthSection.module.css";
import Image from "next/image";
import ad1 from "../../../public/images/ad1.png";
import ad2 from "../../../public/images/ad2.png";
import girl2 from "../../../public/images/girl42.png";
import girl3 from "../../../public/images/girl43.png";

import { Col, Container, Row } from "react-bootstrap";
import Carasoul from "./Carasoul";
const FourthSection = () => {
  return (
    <div className={styles.body}>
      <Carasoul />
      <Container className={styles.cont1}>
        <Row>
          <Col>
            <small>Team</small>
            <p>For managers who want to work better with their teams.</p>
            <h2>8€</h2>
            <small>per user, per month</small>
            <div className={styles.box}>
              <input type="text" />
              <input type="submit" value="Try it now" />
            </div>
            <small className={styles.small}>
              Free 30-days trial, no credit card required
            </small>
            <Col md={{ offset: 2 }}>
              <ul>
                <li>Plug and play, for teams of all sizes</li>
                <li>Dedicated team support to answer all your questions</li>
                <li>Available in English and French</li>
                <li>Works on mobile and desktop</li>
                <li>
                  It's secure: data encryption, European hosting, GRPR compliant
                </li>
              </ul>
            </Col>
          </Col>
          <Col md={5}>
            <h2 className={styles.head}>
              Less expensive than a dysfunctional team
            </h2>
            <div className={styles.girl}>
              <div className={styles.girlBox}>
                We also offer Enterprise plan. If you want to positively impact
                your organisation, contact us via the chat
              </div>
              <Image src={girl3} alt="Girl" />
            </div>
          </Col>
        </Row>
      </Container>
    <div className={styles.future}>

      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} className={styles.p}>
            <h2 className={styles.head}>The future of management</h2>
            <p>
              At Popwork, we believe there is a better way to manage people.
            </p>
            <p>
              Management is the very foundation of every organisation, impacting
              the way we perform and find purpose at work.
            </p>
            <p>
              Yet for too long, managers have been left alone and lack support
              to manage their teams.
            </p>
            <p>
              Popwork is the first tool that helps managers and team members
              work better together - week after week. Designed by and for teams,
              Popwork immediately fits into your day-to-day.
            </p>
            <p>
              Choosing Popwork is choosing to improve the way your team works.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <div className={styles.girl2}>
              <div className={styles.girlbox2}>
                <p>
                  Discover Popwork's resources on management. No big theories,
                  only best practices and actionable tips based on the
                  experience of hundreds of managers.
                </p>
                <p>Already thousands of downloads.</p>
              </div>
              <Image src={girl2} alt="Girl" />
            </div>
          </Col>
          <Col md={6} className={styles.sp}>
            <Row>
              <Image src={ad1} alt="ad" />
              <Col>
                <Image src={ad2} alt="ad" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    </div>
  );
};

export default FourthSection;
