import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./FifthSection.module.css";
const FifthSection = () => {
  return (
    <div className={styles.body}>
      <Container >
        <Row className={styles.cont}>
          <Col md={{span:5,offset:1}}>
            <h2>Start using Popwork with your team today</h2>
          </Col>
          <Col className={styles.field}>
            <div className={styles.box}>
              <input type="text"  />
              <input type="submit" value="Try it now" />
            </div>
            <small className={styles.small}>
              Free 30-days trial, no credit card required
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FifthSection;
