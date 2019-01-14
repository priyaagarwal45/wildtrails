import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal, Tabs } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";


const Option = Select.Option;
const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;



class FooterArea extends Component {

    render() {
        return [
            <div>
                <Row style={{textAlign:"center"}}> 
                   <h3 style={{color:"white"}}>Copyright © 2019, WildTrails. All rights reserved.</h3> 
                </Row>
            </div>
        ]
    }
}

export default FooterArea;