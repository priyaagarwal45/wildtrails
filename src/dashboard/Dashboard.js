import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import HeaderArea from "./HeaderArea";
import FooterArea from "./FooterArea";

const Option = Select.Option;
const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends Component {
    render(){
        return [
            <Layout>
                <Header className="fixed-header-content">
                    <HeaderArea/>
                </Header>
            </Layout>,
            <Layout>
                <Footer className="fixed-footer-content">
                    <FooterArea/>
                </Footer>
            </Layout>
        ]
    }

}
export default withRouter(Dashboard);