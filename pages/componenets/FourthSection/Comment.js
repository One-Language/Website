import React from 'react'
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from './Comment.module.css'
const Comment = ({pic,logo,comment,name,role}) => {
    return (
        <Row className={styles.item}>
          <Col md={8}>
            <Image src={logo} alt="" />
            <p>
              {comment}
            </p>
            <small>{name}</small>
          </Col>
          <Col md={{offset:2}}>
          <Row>
            <Col>
          <small>{role}</small>
            </Col>

          </Row>
          <Image src={pic} alt=""/>
          </Col>
        </Row>
    )
}

export default Comment
