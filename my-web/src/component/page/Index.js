import React, { Component } from "react";
import { Row, Col, Card, Nav, ListGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// data
import { getPets } from "../../_actions/petA";
import { getPetsByUser } from "../../_actions/petA";

// import data .json
import Animals from "../../data/dataAnimal.json";
import Deck from "./Deck.js";
import { connect } from "react-redux";

class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    this.props.getPets();
    this.props.getPetsByUser();
  }

  showSelectPet = e => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  };
  onHandleClick = e => {
    // e.preventDefault();
    console.log(e);
  };

  render() {
    // let petList = document.getElementById('petlist');
    // petList.addEventListener("click", alert("ok"));
    console.log(Animals);
    const { isLoading } = this.props.petR;
    let dataPet = this.props.petR.indexPet.data;
    let dataPetByUserId = this.props.petR.indexPetByUser;

    let data = [];
    if (dataPet) {
      for (let i = 0; i < dataPet.length; i++) {
        // console.log(dataPet[i].name);
        data.push({
          pics: [dataPet[i].photo],
          petName: dataPet[i].name,
          breeder: dataPet[i].user.breeder,
          radius: `${(i + 1) * 8} from here`
        });
      }
    }

    // const { indexPet, isLoading } = this.props.petR;
    // console.log(indexPet);
    return (
      <div>
        <section className="container-dashboard">
          <Row>
            <Col md={4}>
              <div className="panel-left-dash">
                <div className="panel-left-dash-header">
                  <div className="profile">
                    <Row>
                      <Col md={"auto"}>
                        <Link to="/profile">
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
                        </Link>

                        <h1
                          className="color-white nama-profile fix-white"
                          onClick={this.showSelectPet}
                        >
                          Gerry{" "}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{
                              color: "rgba(255, 255, 255)",
                              marginLeft: "14",
                              boxSizing: "border-box"
                            }}
                          />
                        </h1>
                      </Col>
                      {this.state.show ? (
                        <div className="select-pet">
                          <div className="box-select-pet">
                            <ListGroup>
                              {dataPetByUserId
                                ? dataPetByUserId.map((val, i) => (
                                    // console.log(val)
                                    <ListGroup.Item
                                      className="item-pet"
                                      key={i}
                                    >
                                      <div>
                                        <h4
                                          id="petlist"
                                          onClick={() =>
                                            this.onHandleClick(val.id)
                                          }
                                        >
                                          {val.name}
                                        </h4>
                                      </div>
                                    </ListGroup.Item>
                                  ))
                                : ""}
                            </ListGroup>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </Row>
                  </div>
                </div>

                <div className="panel-left-dash-opsi">
                  <h4
                    style={{
                      fontWeight: "900",
                      filter: "drop-shadow(0px 0 1px rgba(0, 0, 0, 0.9))"
                    }}
                  >
                    Match
                  </h4>
                </div>

                <div className="panel-left-dash-body">
                  <div className="list-user1">
                    <Row className="justify-content-left list-user2">
                      {Animals.map((animal, i) => (
                        <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                              <div className="galery-tumbnail">
                                <img
                                  src={animal.imgSrc}
                                  className="d-inline-block align-top"
                                  alt="MyLogo"
                                />
                                <h4 className="color-white">{animal.nama}</h4>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="panel-righ-dash">
              <div className="content-right-dash">
                <div className="row justify-content-center">
                  <div
                    className="justify-content-center d-flex"
                    style={{
                      height: "580px",
                      overflow: "hidden",
                      width: "100%",
                      position: "relative"
                    }}
                  >
                    <div className="sweep">
                      {isLoading ? (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/loader3.png"
                          }
                          width="300"
                          height="250"
                          className="d-inline-block align-top loader"
                          alt="MyLogo"
                          style={{
                            borderRadius: "5",
                            position: "fixed",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            width: "200px",
                            height: "200px",
                            margin: "auto"
                          }}
                        />
                      ) : (
                        <Deck data={data} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* option */}

              <div
                className="justify-content-center d-flex"
                style={{
                  marginTop: "-50px",
                  zIndex: "3",
                  position: "relative"
                }}
              >
                <div className="img-select">
                  <img
                    src={require("../../assets/images/icon/reload.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select-middle">
                  <img
                    src={require("../../assets/images/icon/disklove.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select-middle">
                  <img
                    src={require("../../assets/images/icon/love.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select">
                  <img
                    src={require("../../assets/images/icon/danger.png")}
                    alt="MyLogo"
                  />
                </div>
              </div>

              <div
                className="container footer-panel-dash justify-content-center d-flex"
                style={{ marginTop: "-25px" }}
              >
                <Navbar
                  bg=""
                  expand="lg"
                  fixed="bottom"
                  className="nav-dash"
                  id="button-toggle"
                >
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="toggle-nav-dash"
                  />
                  <Navbar.Collapse id="basic-navbar-nav" className="my-nav">
                    <Nav className="">
                      <Nav.Link href="" className="nav-hide">
                        Hide
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> No
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} /> Yes
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} /> Open
                        Profil
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleDown} /> Close
                        Profile
                      </Nav.Link>

                      <input type="text" className="input-nav-dash" />

                      <Nav.Link href="#">Next Photo</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Col>
          </Row>
        </section>
        {/* {console.log(this.props.petR.indexPet.data)} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    petR: state.petR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPets: () => dispatch(getPets()),
    getPetsByUser: () => dispatch(getPetsByUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
