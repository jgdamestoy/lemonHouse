import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {colors} from "config/theme";

import Slide from "./Slide";

const Container = styled.div`
  width: 100vw;
`;
const ArrowBox = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  ${props => props.pos}: 0;
  top: 0;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${colors.lemonYellow};
  &:hover {
    color: ${colors.lemonGreen};
  }
`;

const propTypes = {
  imgs: PropTypes.array,
};
const defaultProps = {};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowBox pos="right" onClick={onClick}>
      <i className="fa fa-angle-right" />
    </ArrowBox>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowBox pos="left" onClick={onClick}>
      <i className="fa fa-angle-left" />
    </ArrowBox>
  );
}

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const fullSettings = {
      ...settings,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <Container>
        <Slider {...fullSettings}>
          {this.props.imgs.map((img, index) => (
              <Slide key={index} img={img} />
          ))}
        </Slider>
      </Container>
    );
  }
}

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
