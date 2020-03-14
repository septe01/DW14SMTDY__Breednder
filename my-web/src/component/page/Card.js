import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
  faMapMarkerAlt,
  faInfoCircle,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { petName, breeder, radius, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate([x, y], (x, y) => `translate3d(${x}px,10px,0)`)
        }}
      >
        <animated.div
          {...bind(i)}
          style={
            {
              // transform: interpolate([rot, scale], trans)
            }
          }
        >
          <div className="card card-sweep">
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            {/* detail color-white detail-text-index-profile*/}
            <div className="detail color-white">
              <div className="detail-text-index-profile">
                <h3>{petName}</h3>
                <div className="row mt-3">
                  <div className="col-md-10">
                    <p>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ marginRight: "4" }}
                      />{" "}
                      Pemilik : {breeder}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ marginRight: "4" }}
                      />{" "}
                      {radius}
                    </p>
                  </div>
                  <div className="col-md-2 info-icon-dash">
                    <p>
                      <FontAwesomeIcon icon={faInfoCircle} />{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
