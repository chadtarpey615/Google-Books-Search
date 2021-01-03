import React from "react";
import Col from "../List/Col";
import Row from "../List/Row";
//import "./header.css"

export default function Header() {
    return (
        <div className="container text-align-center py-5">
            <Row>
                <Col size="col-12">
                <h1> React Google Books Search</h1>
                </Col>
                </Row>
                <Row>

                <Col size="col-12">

                <h3>Search for and save Books of Interest</h3>
                </Col>
                </Row>
        </div>
    )
}