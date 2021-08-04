import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'
import popwork from "../../../public/images/popwork.png";


const Footer = () => {
    return (
        <div className={styles.body}>
            <Container>
                <Row>
                    <Col>
                    <h4>
                    <Image src={popwork} alt="" className={styles.logo}/>
                    </h4>
                    <ul>
                        <li>Popwork, the app that makes managers and teams work better together.</li>
                        <li>© People over Process SAS</li>
                        <li>Popwork on LinkedIn</li>
                    </ul>
                    </Col>
                    <Col>
                    <h4>Discover Popwork</h4>
                    <ul>
                        <li>How it works</li>
                        <li>Mood tracker</li>
                        <li>Check-in ritual</li>
                        <li>Topics follow-up</li>
                    </ul>
                    </Col>
                    
                    <Col>
                    <h4>About</h4>
                    <ul>
                        <li>Manifesto</li>
                        <li>How much it costs</li>
                        <li>User terms</li>
                        <li>Privacy policy</li>
                        <li>Follow us</li>
                    </ul>
                    </Col>
                    <Col>
                    <h4>Ressources & Help</h4>
                    <ul>
                        <li>Log in</li>
                        <li>Help Center</li>
                        <li>Product news</li>
                        <li>Blog</li>
                        <li>Popwork management guide</li>
                        <li>Popwork questions guide</li>
                    </ul>
                    </Col>
                    <Col>
                    <h4>From the Blog</h4>
                    <ul>
                        <li>Product update: Better, faster, stronger text editing on Popwork</li>
                        <li>Prioritize prioritizing!</li>
                        <li>Product update: improved objectives are live</li>
                        <li>Read more</li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
