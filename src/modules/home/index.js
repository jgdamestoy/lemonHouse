import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cover from "./cover/";
import Contact from "./contact/";

const Container = styled.div`
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
        
       
        
        <Contact />
      </Container>);
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
