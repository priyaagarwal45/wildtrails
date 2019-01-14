import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal,Tabs } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";


class Login extends Component { 
    render(){
    return[
        <div>
            <div className="login-block">
            <div className="log">Log In</div>
            <div className="login-form">
            <Input type="text" placeholder="Username" style={{marginTop:10+'px',borderStyle:"none",borderBottom:"1px solid #c3c0c0"}}/>
            <Input type="password" placeholder="Password" style={{marginTop:10+'px',borderStyle:"none",borderBottom:"1px solid #c3c0c0"}}/>
            <Link to = "/landing"><button style={{marginTop:10+'px',marginLeft:137+'px'}} >Log In</button></Link>
            <p style={{textAlign:"center"}}>Not a Member?<a href="#"> Sign up</a></p>
            </div></div>
        </div>
    ]
    }
}

export default Login;