import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Inputrange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClose = event => {
    // event.preventDefault();
    const token = window.localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      return <Redirect to="/" />;
    }
    window.location.reload(false);
  };

  render() {
    let dataUsr = "";
    if (this.props.userR.getUserByID.userAut) {
      dataUsr = this.props.userR.getUserByID.userAut;
    }
    return (
      <div className="panel-left-dash-opsi account-setting">
        <h3 className="">Account Settings</h3>

        <div className="email-phone color-bg-white">
          <div className="email">
            <span>Email</span>
            <span className="value-right">{dataUsr.email}</span>
          </div>
          <hr />
          <div className="phone">
            <span>Phone</span>
            <span className="value-right">{dataUsr.phone}</span>
          </div>
        </div>
        <div className="discovery">
          <h3>Discovery Settings</h3>
        </div>
        <div className="discovery-setting">
          <div className="maximum-distant">
            <span>Maximum Distance </span>
            <span>{this.state.value} km. </span>
          </div>
          <div className="discovery-range">
            <input
              type="range"
              min="0"
              max="100"
              onChange={this.handleChange}
              value={this.state.value}
              style={{
                width: "100%",
                height: "6px",
                cursor: "pointer",
                boxShadow: "0px 0px 0px #000000",
                background: `linear-gradient(328.08deg,#f32121 0.82%,rgba(243, 33,33, 0.23) 97.97% )`,
                borderRadius: "4px",
                border: "0px solid #000000"
              }}
            />
          </div>
          <div className="discovery-form">
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Adult" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Species</Form.Label>
                <Form.Group controlId="formBasicPassword">
                  <div className="form-group">
                    <select className="form-control" name="" id="">
                      <option>Pet</option>
                    </select>
                  </div>
                </Form.Group>
              </Form.Group>
              <div className=" justify-content-center d-flex">
                {/* <Link to="/logout"> */}
                <button
                  className="discoveri-close color-bg"
                  onClick={this.handleClose}
                >
                  Close
                </button>
                {/* </Link> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
    // }
  }
}

const mapStateToProps = state => {
  return {
    userR: state.userR
  };
};

export default connect(mapStateToProps)(Inputrange);
