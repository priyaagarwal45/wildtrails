import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal, Tabs } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import Hometab from "./hometab";
import Contact from "./contacttab";
import Login from "./logintab";

const Option = Select.Option;
const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}


class HeaderArea extends Component {

    render() {
        return [
            <div>
                <Row>
                    <Col span={4}>
                        <h1 style={{ color: "#e67919" }}><b><i>Wild Trails</i></b></h1>
                    </Col>
                    <Col span={20}>
                        <Tabs className="primary-tab" defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Home" key="1">
                                <Hometab />
                            </TabPane>
                            <TabPane tab="Contact us" key="2">
                                <Contact />
                            </TabPane>
                            <TabPane tab="Login" key="3">
                                <Login />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        ]
    }
}

export default HeaderArea;