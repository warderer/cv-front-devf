import React from "react";
import Navmain from "./Navmain";
import { Container, Row, Col } from "shards-react";
import './Header.css';

export default function Header() {
    return (
        <div className="Header-content">
            <Container className="Header-container">
                <Row>
                    <Col lg="4">
                        <h1>CVapp</h1>
                    </Col>
                    <Col lg="8">
                        <Navmain />
                    </Col>
                </Row>
            </Container>
            <div className="Header-hero">
            <img src="https://cdn.student.com/bundles/microapp-static-pages/images/public/about/about-us-hero-image-t.jpg" alt="" ></img>
            </div>
        </div>
    );
}