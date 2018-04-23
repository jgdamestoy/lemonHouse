import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

const propTypes = {};
const defaultProps = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Container>Home</Container>;
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
