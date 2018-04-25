import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AnimateToCover from "components/AnimateToCover";

const Container = styled.div``;
const Img = styled.img`
  width: 100%;
`;

const propTypes = {
  img: PropTypes.string
};
const defaultProps = {};

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
      dimensions: {}
    };
  }

  handleClick = () => {
    const { top, left, width, height } = document
      .getElementById(`${this.props.index}`)
      .getBoundingClientRect();
    this.setState({
      startAnimation: true,
      dimensions: { top, left, width, height }
    });
  };

  render() {
    const { url, img } = this.props;
    return (
      <Container onClick={this.handleClick}>
        <Img src={img} id={this.props.index} />
        <AnimateToCover
          url={url}
          image={img}
          dimensions={this.state.dimensions}
          display={this.state.startAnimation}
        />
      </Container>
    );
  }
}

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
