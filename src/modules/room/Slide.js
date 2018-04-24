import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: url(${props => props.backgroundImg}) no-repeat center center;
  background-size: cover;
`;

const propTypes = {
  img: PropTypes.string,
};
const defaultProps = {};

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container backgroundImg={this.props.img}>
      </Container>
    );
  }
}

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
