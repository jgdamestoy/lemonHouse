import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { breakPoints } from "config/theme";
import Slide from "./Slide";

const Container = styled.div`
  width: 80vw;
  @media (min-width: ${breakPoints.std}) {
    width: 40vw;
  }
`;

const propTypes = {
  imgs: PropTypes.array,
  id: PropTypes.string,
  handleChangeState: PropTypes.func
};
const defaultProps = {};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgs, id, handleChangeState, slug } = this.props;
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
            <Slide
              key={index}
              index={index}
              img={img}
              slug={slug}
              handleChangeState={handleChangeState}
            />
          ))}
        </Slider>
      </Container>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;
