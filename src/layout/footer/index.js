import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const propTypes = {};
const defaultProps = {};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Container>FOOTER</Container>;
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
