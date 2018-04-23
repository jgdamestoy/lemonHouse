import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cover from "./cover";
import Description from "./description"

const Container = styled.div`
  background: rgba(243, 227, 49, 0.5)
`;

const propTypes = {};
const defaultProps = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Cover />
        <Description />
      </Container>);
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
