import React, { Component } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import ProfileSetting from "../user/ProfileSetting";
import EditProfileForm from "../user/EditProfileForm";

class AddPet extends Component {
  render() {
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
                        <Link to="profile">
                          <h1 className="arrow-back">
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              style={{
                                color: "rgba(255, 255, 255)",
                                marginLeft: "20",
                                filter:
                                  "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
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
                          Add Pet{" "}
                        </h1>
                      </Col>
                    </Row>
                  </div>
                </div>

                {/* profile setting */}
                <ProfileSetting />
              </div>
            </Col>

            <Col md={8} className="panel-righ-dash">
              <div className="">
                <div className="row justify-content-center">
                  <div className="col-md-6 justify-content-center d-flex">
                    <Card className="card-box-galery">
                      <div className="card-galery-box">
                        <div className="galery-profile color-bg-grey pb-3">
                          <Row className="justify-content-left">
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    />
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add-close">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    {/* <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    /> */}
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    {/* <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    /> */}
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    {/* <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    /> */}
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    {/* <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    /> */}
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                            <Col
                              md={"4"}
                              sm={"4"}
                              className="thumbnail-audio mt-3 box-card-setting-user"
                            >
                              <Card className="card-left-dash card-sizing-box">
                                <Card.Body className="card-thumb">
                                  <div className="galery-tumbnail card-gelry-add">
                                    {/* <img
                                      src={require("../../assets/images/galery/2.jpeg")}
                                      className="d-inline-block align-top"
                                      alt="MyLogo"
                                    /> */}
                                  </div>
                                </Card.Body>
                              </Card>
                              <div className="close-add">
                                <img
                                  src={require("../../assets/images/icon/close.png")}
                                  alt="close"
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="profile-setting-detail color-bg-grey card-setting-profile-height pt-2">
                          {/* <Card.Title className="profile-setting-detail-name">
                            <h4>Name Pet</h4>
                            <span className="color"></span>
                          </Card.Title>
                          <Card.Text>
                            <div className="scroll-detail-user detail-box-profile-mt">
                              <p className="color-bg-white bg-white-sett-profile">
                                Gary
                              </p>

                              <div className="colsetting">
                                <h5 className="color-bg-grey  bg-white-sett-profile">
                                  Breeder
                                </h5>
                                <p className="color-bg-white bg-white-sett-profile">
                                  Egi Ginting
                                </p>
                              </div>

                              <div className="colsetting">
                                <h5 className="color-bg-grey  bg-white-sett-profile">
                                  Gender
                                </h5>
                                <p className="color-bg-white bg-white-sett-profile">
                                  Male
                                </p>
                              </div>

                              <div className="colsetting">
                                <h5 className="color-bg-grey  bg-white-sett-profile">
                                  Age
                                </h5>
                                <p className="color-bg-white bg-white-sett-profile">
                                  Adult
                                </p>
                              </div>
                              <div className="colsetting">
                                <h5 className="color-bg-grey  bg-white-sett-profile">
                                  About Pet
                                </h5>
                                <p className="color-bg-white big-size">
                                  is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the
                                  1500s, when an unknown printer took a galley
                                  of type and scrambled it to make a type
                                  specimen book.
                                </p>
                              </div>
                            </div>
                          </Card.Text>
                          <div className=" justify-content-center d-flex btn-scroll-detail-user">
                            <Link to="/profile">
                              <button className="btn-reg color-bg">Save</button>
                            </Link>
                          </div> */}

                          {/* Edit profile form */}
                          <EditProfileForm />
                        </div>
                      </div>
                    </Card>
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

export default AddPet;
