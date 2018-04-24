import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import Slide from "./Slide";

const Container = styled.div`
  width: 40vw;
`;

const propTypes = {
  imgs: PropTypes.array,
  id: PropTypes.string,
};
const defaultProps = {};

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {imgs, id} = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Slider {...settings}>
          {this.props.imgs.map((img, index) => (
            <Link to={`/room/${id}`}>
              <Slide key={index} img={img} />
            </Link>
          ))}
        </Slider>
      </Container>
    );
  }
}

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
