import React from "react";
import {Row, Col, NavLink} from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Row style={{color: "white"}}>
                <Col>
                    <p style={{float: "left", paddingLeft: "2em"}}>Made by: <a href="https://nhutton.github.io/" target="_blank">Nickolas Hutton</a>, <a href="https://turner344.github.io/" target="_blank">Turner Jimerson</a>, <a href="https://cjkalahiki.github.io/" target="_blank">Connor Kalahiki </a><br/> &copy; RnGaming</p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;