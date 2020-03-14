import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditProfileForm extends Component {
  render() {
    return (
      <>
        <Card.Title className="profile-setting-detail-name">
          <h4>Name Pet</h4>
          <span className="color"></span>
        </Card.Title>
        <Card.Text>
          {/* bg-white-sett-profile */}
          <div className="scroll-detail-user detail-box-profile-mt">
            <div class="form-group">
              <input
                type="text"
                className="form-control bg-white-sett-profile"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Pet Name"
              />
            </div>

            <div className="colsetting">
              <h5 className="color-black mt-4">Breeder</h5>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control bg-white-sett-profile"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Breeder Name"
                />
              </div>
            </div>

            <div className="colsetting">
              <h5 className="color-black mt-4">Gender</h5>
              <div class="form-group">
                <select
                  class="form-control"
                  name=""
                  id=""
                  className="form-control bg-white-sett-profile select-gender"
                  style={{ paddingRight: "10px !important" }}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="colsetting">
              <h5 className="color-black mt-4">Age</h5>
              <div class="form-group">
                <select
                  class="form-control"
                  name=""
                  id=""
                  className="form-control bg-white-sett-profile select-gender"
                  style={{ paddingRight: "10px !important" }}
                >
                  <option>Select Age</option>
                  <option>Adult</option>
                  <option>Animal Child</option>
                </select>
              </div>
            </div>

            <div className="colsetting">
              <h5 className="color-black mt-4">About Pet</h5>
              <div class="form-group">
                <textarea
                  className="form-control bg-white-sett-profile select-gender form-control"
                  name=""
                  id=""
                  rows="3"
                  placeholder="My pet is cute.."
                ></textarea>
              </div>
            </div>
          </div>
        </Card.Text>
        <div className=" justify-content-center d-flex btn-scroll-detail-user">
          <Link to="/profile">
            <button className="btn-reg color-bg">Save</button>
          </Link>
        </div>
      </>
    );
  }
}

export default EditProfileForm;
