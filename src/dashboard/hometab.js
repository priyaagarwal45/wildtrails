import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal, Tabs } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";


class Hometab extends Component {
    render() {
        return [
            <div>
                <h1 style={{ textAlign: "center", color: "green" }}><b><i>Once a year, go Someplace you've never been before...</i></b></h1>
                <Row>
                    <img src="/images/wildlife.jpeg" height="250" width="920" border="1px solid black" alt="" />
                </Row>
                <Row style={{ marginTop: 10 + 'px' }}>
                    <Col span={6}>
                        <img src="/images/tiger.jpeg" height="250" width="250" border="1px solid black" alt="" />
                    </Col>
                    <Col span={13}>
                        <p style={{ fontSize: 18 + 'px', textAlign: "justify" }}><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b></p>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                    <p style={{ fontSize: 18 + 'px', textAlign: "justify" }}><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b></p>
                    </Col>
                    <Col span={6}>
                    <img src="/images/dear.jpeg" height="250" width="250" border="1px solid black" alt="" />
                    </Col>
                </Row>
                <Row style={{ marginTop: 10 + 'px' }}>
                    <Col span={6}>
                        <img src="/images/elephant.jpeg" height="250" width="250" border="1px solid black" alt="" />
                    </Col>
                    <Col span={13}>
                        <p style={{ fontSize: 18 + 'px', textAlign: "justify" }}><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b></p>
                    </Col>
                </Row>
            </div>
        ]
    }
}

export default Hometab;