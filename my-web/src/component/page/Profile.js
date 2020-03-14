import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronLeft,
  faMapMarkerAlt,
  faVenusMars,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

import { getUser } from "./../../_actions/userA";

import PaymenModal from "../modal/PaymenModal";
import ProfileSetting from "../user/ProfileSetting";
import { connect } from "react-redux";

class Profile extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const token = localStorage.getItem("token");
    console.log(`Bearer ${token}`);
    const { getUserByID, isLoading, isError } = this.props.userR;
    let dataUser = "";
    if (getUserByID.userAut) {
      dataUser = getUserByID.userAut;
    }

    if (isLoading) {
      return (
        <img
          src={process.env.PUBLIC_URL + "/assets/images/loader2.gif"}
          width="300"
          height="250"
          className="d-inline-block align-top"
          alt="MyLogo"
          style={{
            borderRadius: "5",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            width: "560px",
            height: "400px",
            margin: "auto"
          }}
        />
      );
    } else if (getUserByID) {
      return (
        <div>
          <section className="container-dashboard">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col md={4}>
                <div className="panel-left-dash">
                  <div className="panel-left-dash-header">
                    <div className="profile">
                      <Row>
                        <Col md={"auto"}>
                          <Link to="home">
                            <h1 className="arrow-back">
                              <FontAwesomeIcon
                                icon={faChevronLeft}
                                style={{
                                  color: "rgba(255, 255, 255)",
                                  filter:
                                    "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                                  marginLeft: "20",
                                  boxSizing: "border-box"
                                }}
                              />
                            </h1>
                          </Link>

                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../assets/images/profile.jpeg"
                            }
                            width="250"
                            height="50"
                            className="d-inline-block align-top"
                            alt="MyLogo"
                            style={{ cursor: "pointer" }}
                          />
                          {/* <Link to="index"> */}
                          <h1 className="color nama-profile fix-white">
                            Profile Pet{" "}
                          </h1>
                          {/* </Link> */}
                        </Col>
                      </Row>
                    </div>
                  </div>
                  {/* profile stting */}
                  {/* <ProfileSetting data={this.props.userR} /> */}
                  <ProfileSetting data={this.dataUser} />
                </div>
              </Col>
              <Col md={8} className="panel-righ-dash">
                <div className="content-right-dash">
                  <div className="row justify-content-center settingprofile-panle-right">
                    <div className="col-md-6 justify-content-center d-flex">
                      <Card className="card-swipe-profile-box">
                        <div className="detail-user">
                          <Card border="light" className="card-swipe-profile">
                            <img
                              src={require("../../assets/images/galery/5.jpeg")}
                              className="d-inline-block align-top"
                              alt="MyLogo"
                            />
                          </Card>
                          <div className="profile-setting-detail">
                            <Card.Title className="profile-setting-detail-name">
                              <span>Garry</span>
                              <span className="color">Cat</span>
                            </Card.Title>

                            <Card.Text>
                              <div className="scroll-detail-user">
                                <p>
                                  <FontAwesomeIcon
                                    icon={faUser}
                                    style={{ marginRight: "4" }}
                                  />{" "}
                                  Breeder : {dataUser.email}
                                </p>
                                <p>
                                  <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    style={{ marginRight: "4" }}
                                  />{" "}
                                  10 Kilometer dari sini{" "}
                                </p>
                                <p>
                                  <FontAwesomeIcon
                                    icon={faVenusMars}
                                    style={{ marginRight: "4" }}
                                  />{" "}
                                  Male - Adult{" "}
                                </p>

                                <p>
                                  <FontAwesomeIcon
                                    icon={faPhoneAlt}
                                    style={{ marginRight: "4" }}
                                  />{" "}
                                  Phone Breeder : {dataUser.phone}
                                </p>
                              </div>
                            </Card.Text>
                            <div className=" justify-content-center d-flex btn-scroll-detail-user scroll-user-info">
                              <Link to="edit-profile">
                                <button className="btn-reg color-bg">
                                  Edit
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Card>
                      {/* <button className="btn-reg add-pet color-bg">
                      Add pet
                    </button> */}
                      <PaymenModal />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userR: state.userR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
