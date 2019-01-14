import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal, Tabs } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";

const { TextArea } = Input;


class Contact extends Component {
    render() {
        return [
            <div>
                <h1 style={{fontSize:40+'px'}}><b>Contact us</b></h1>
                <div className="contact-form">
                    <Row className = "contact">
                        <Col span={6}>
                         First Name:    <Input type="text" placeholder="First name*" />
                        </Col>
                    </Row>
                    <Row className = "contact">
                        <Col span={6}>
                        Last Name:    <Input type="text" placeholder="Last name*" />
                        </Col>
                    </Row>
                    <Row className = "contact">
                    <Col span={8}>
                    Email:    <Input type="email" placeholder="E-mail*" />
                    </Col>
                    </Row>
                    <Row className = "contact">
                    <Col span={8}>
                    Phone Number:    <Input type="text" placeholder="Phone Number*" />
                    </Col>
                    </Row>

                    <Row className = "contact">
                    <Col span={10}>
                    Query:   <TextArea placeholder="Query*" rows={4}/>
                    </Col>
                    </Row>


                    <Row className = "contact">
                        <Col span={16}  className="left-padding">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="contact-form-button"
                            >
                                Submit
                      </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        ]
    }
}

export default Contact;