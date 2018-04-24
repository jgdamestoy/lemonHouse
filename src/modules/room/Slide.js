import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img`
  width: 100%;
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
      <Container>
        <Img src={this.props.img}/>
      </Container>
    );
  }
}

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
