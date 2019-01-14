import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Icon, Button, Form, Input, Select, Row, Col, Layout, Modal, DatePicker, message } from "antd";
import "../App.css";
import styles from "../assets/Dashboard.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import MasterService from '../assets/APIcall'

const Option = Select.Option;
const { Header, Footer, Sider, Content } = Layout;

let hasEmptyRow = false;
let roomCombo = [5];
let roomIndex = 0;

// Function to add new room
const addNewRoom = () => {
    this.hasEmptyRow = true;
    let RoomNo = this.roomCombo.length + 1;
    let newRoom = {
        key: roomCombo.length,
        adults: "",
        kids: "",
        infants: "",
    };
    this.newRoom.splice(this.roomCombo.length, 0, newRoom); // adding a room
    this.roomIndex++;
};

// Component to add new room
class AddRoom extends Component {
    render() {
        this.newRoom = [{
            adults: "",
            kids: "",
            infants: "",
        }]
        this.addbutton = "";
        if (this.props.index === 0) {
            this.legend = "Room 1";
        }
        else {
            // this.addbutton = <span onClick={this.addNewRoom} style={{ cursor: "pointer", marginTop: 20 + 'px', marginBottom: 20 + 'px' , border:"1px solid black",padding:5+'px',borderRadius:5+"px"}}><Icon type="plus-circle-o" /> Add Room</span>;
            this.legend = "Room " + this.props.index;
        }

        this.singleblock = <fieldset
            key={this.props.index}
        >
            <legend style={{ fontSize: 15 + 'px', color: "navy blue" }}><b>{this.legend}</b></legend>

            <div className="roomCount">
                <Row>
                    Adults (18+ years):  <input style={{ width: 100 + 'px', border: "none", borderBottom: "1px solid grey" }} name="adults" type="number" min="1" max="99" value={this.props.room.adults} /><br></br>
                    Kids (6 - 18 years): <input style={{ width: 100 + 'px', border: "none", borderBottom: "1px solid grey" }} name="kids" type="number" min="0" max="99" value={this.props.room.kids} /><br></br>
                    Infants ( 6 years):   <input style={{ width: 100 + 'px', border: "none", borderBottom: "1px solid grey" }} name="infants" type="number" min="0" max="99" value={this.props.room.infants} /><br></br>
                </Row>
            </div>
            <div>
                <span onClick={this.addNewRoom} style={{ cursor: "pointer", marginTop: 20 + 'px', marginBottom: 20 + 'px', border: "1px solid black", padding: 5 + 'px', borderRadius: 5 + "px" }}><Icon type="plus-circle-o" /> Add Room</span>
            </div>
        </fieldset>


        if (this.props.index === this.newRoom.length - 1) {
            return ([

                //<span onClick={this.addNewRoom} style={{ cursor: "pointer", marginTop: 15 + 'px', marginBottom: 25 + 'px', marginRight: 225 + 'px', float: "left", width: 25 + "%", border:"1px solid black",padding:5+'px',borderRadius:5+"px" }}><Icon type="plus-circle-o" /> Add Room</span>),
                this.singleblock
            ])
        }
        else {
            //return (this.singleblock)
        }
    }
}

// Component is called when login is successful
class LandingPage extends Component {
    //Initialising new trip details
    trip = [{
        sancname: "",
        checkin: "",
        checkout: "",
        resortType: "",
        TotalCost: 0,
        roomCombo: [],
        safarilist: []

    }]
    //Setting initial values of adding a trip
    addtrip = () => {
        let trip = {
            sancname: "",
            checkin: "",
            checkout: "",
            resortType: "",
            roomCombo: [],
            safarilist: [],
            TotalCost: 0
        }
    }
    // Function called when user has entered all details and click send
    savedata = () => {
        this.trip.sancname = this.park;
        this.trip.checkin = this.checkin;
        this.trip.checkout = this.checkout;
        this.trip.resortType = this.resort;
        this.trip.roomCombo = [{
            "adults": 2,
            "kids": 1,
            "infants": 1
        }]
        this.trip.safarilist = [
            {
                "date": "10-Dec-2018",
                "session": "evening",
                "type": "Exclusive Gypsy"
            },
            {
                "date": "11-Dec-2018",
                "session": "morning",
                "type": "Exclusive Gypsy"
            },
            {
                "date": "11-Dec-2018",
                "session": "evening",
                "type": "Exclusive Gypsy"
            },
        ]
        this.trip.TotalCost = this.cost(this.trip.roomCombo, this.trip.safarilist);
        console.log(this.trip);
        this.saveDetails();
    }

    //Function called to calculate the cost of the trip
    cost = (roomCombo, safarilist) => {
        var price = 0;
        price += roomCombo.length * 5000;
        var visitors = 0;
        var gypsy = 0;
        for (var j = 0; j < roomCombo.length; j++) {
            visitors += roomCombo[j].adults + roomCombo[j].kids + roomCombo[j].infants;
        }
        for (var i = 0; i < safarilist.length; i++) {
            if (safarilist[i].type == 'Exclusive Gypsy' || safarilist[i].type == 'Standard Gypsy') {
                gypsy = Math.ceil(visitors / 6);
                price += gypsy * 10000;
            }
            else if (safarilist[i] === 'Canter') {
                price += visitors * 2000;
            }
        }
        return price;
    }

    // Function to make the API call
    saveDetails = () => {
        let roomdata = {
            name: "Priya",
            emailid: "priya123456@gmail.com",
            phoneno: "1234567890",
            whatsappno: "2345678928",
            adults: "2",
            children: "1",
            infants: "1",
            checkin: "15/01/2019",
            checkout: "18/01/2019",
            bookairline: "yes",
            bookcab: "yes",
            uniqueid: "4"
        };
        let data = {
            room: roomdata
        }
        MasterService.post('http://13.228.170.225:2178/requestQuoteForTrips', data).then(resp => {
            if (resp.status !== 200) {
                message.error("Error");
            }
            else {
                message.success("Trip Saved!");
            }
        })
    }


    constructor(props) {
        super(props);
        this.state = {
            Parkvalue: "",
            Resortvalue: "",
            visible: false,
            rooms: "1 Room/4 Guests",
            startValue: null,
            endValue: new Date()
        }
    }

    //Disables the dates earlier than today
    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue < endValue;
    }

    onChange = (field, date, dateString) => {
        this.setState({
            [field]: date,

        });
    }

    //Sets the Check-In value
    onStartChange = (date, dateString) => {
        this.onChange('startValue', date, dateString);
        this.checkin = dateString
    }


    //Sets the check-Out value
    onEndChange = (date, dateString) => {
        this.onChange('startValue', date, dateString);
        this.checkout = dateString
    }

    // Opens the Modal to enter details
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    //setting the state when user clicks on send
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    //Setting the state when user clicks on cancel
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    //Function to get the value of Park Selected
    parkid = e => {
        this.park = e;
    }

    //Function to get the value of Resort Type Selected
    resortid = e => {
        this.resort = e;
    }




    render() {
        var park = "";
        var resort = "";
        var checkin = "";
        var checkout = "";
        return [
            <div className="landing">
                <h1 style={{ color: "#a25605", textAlign: "center", fontSize: 55 + 'px', fontFamily: "serif" }}><b>Welcome to Wild Trails!</b></h1>
                <Link to='/dashboard'>
                    <Button style={{ float: "right", marginRight: 15 + 'px', marginTop: -90 + 'px' }}><b>Log out</b></Button>
                </Link>

                <Button style={{ marginLeft: 35 + "%", width: 475 + 'px', height: 80 + 'px', fontSize: 45 + 'px', fontFamily: "serif", backgroundColor: "#c3c317eb" }} onClick={() => { this.showModal(); this.addtrip(); }}><b>Let's Plan a Trip!</b></Button>
                <Row style={{ marginTop: 15 + 'px' }}>
                    <Col span={12}>
                        <img src="/images/safari.jpeg" height="400" width="100%" style={{ opacity: 0.3 }} alt="" />
                    </Col>
                    <Col span={12} >
                        <img src="/images/safari1.jpeg" height="400" width="100%" style={{ opacity: 0.3 }} alt="" />
                    </Col>
                </Row>
                <Row >
                    <Col span={12} >
                        <img src="/images/safari2.jpeg" height="400" width="100%" style={{ opacity: 0.3 }} alt="" />
                    </Col>
                    <Col span={12} >
                        <img src="/images/safari3.jpeg" height="400" width="100%" style={{ opacity: 0.3 }} alt="" />
                    </Col>
                </Row>
            </div>,
            <Modal
                title="Your Requirement"
                visible={this.state.visible}
                onOk={() => { this.savedata(); this.handleOk(); this.setState({ Parkvalue: " ", Resortvalue: "" }) }}
                okText="Send"
                onCancel={() => { this.handleCancel(); this.setState({ Parkvalue: " ", Resortvalue: "" }) }}
            >
                <Row>
                    <Col span={18} offset={3}><b>Select Park:</b>
                        <Select className="park" style={{ width: 75 + "%", paddingLeft: 0 + 'px' }}
                            value={this.state.Parkvalue}
                            onChange={(e) => { this.setState({ Parkvalue: e }); this.parkid(e) }} placeholder="Select ">
                            <Option value=" " disabled>Select Park</Option>
                            <Option value="Bandhavgarh Park">Bandhavgarh Park</Option>
                            <Option value="Tadoba Park">Tadoba Park</Option>
                            <Option value="Bandipur Park">Bandipur Park</Option>
                        </Select>
                    </Col>
                    <Col span={10} offset={3} style={{ marginTop: 10 + 'px' }}>
                        <Row>
                            <Col span={10} style={{width:73+'%'}}><b>Check-In</b>
                                <DatePicker selected={this.state.endValue}
                                    disabledDate={this.disabledStartDate}
                                    onChange={this.onStartChange} placeholder="Check-In" />
                            </Col>
                            <Col span={10} style={{width:73+'%',marginTop: 10 + 'px'}} ><b>Check-Out</b>
                                <DatePicker selected={this.state.endValue}
                                    disabledDate={this.disabledStartDate}
                                    onChange={this.onEndChange} placeholder="Check-Out" />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={18} offset={3} style={{ marginTop: 10 + 'px' }}><b>Resort Type :</b>
                        <Select className="resort" style={{ width: 75 + "%", paddingLeft: 0 + 'px' }}
                            value={this.state.Resortvalue}
                            onChange={(e) => { this.setState({ Resortvalue: e }); this.resortid(e) }} placeholder="Select Resort Type" >
                            <Option value=" " disabled>Resort Type</Option>
                            <Option value="Luxury">Luxury</Option>
                            <Option value="Standard">Standard</Option>
                            <Option value="Budget">Budget</Option>
                        </Select>
                    </Col>
                    <Col span={18} offset={3} style={{ marginTop: 10 + 'px' }}>
                        <Input className="room" style={{ width: 100 + "%", paddingLeft: 0 + 'px' }} placeholder={this.state.rooms} />
                        {/* <div>
                            {this.roomCombo.map((room,roomIndex) => (
                                <AddRoom room={room} index={this.roomIndex} ></AddRoom>
                            ))}
                            
                        </div> */}

                    </Col>
                </Row>
            </Modal>

        ]
    }

}

export default withRouter(LandingPage);