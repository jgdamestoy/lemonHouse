import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Header from "./header/";
import Footer from "./footer/";
import Background from "./Background";

const Container = styled.div``;
/* Hanlde min-height on all the App */
const Content = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
`;

const propTypes = {};

class Layout extends Component {
  componentDidUpdate(prevProps) {
    /* Handle scroll on routes change */
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Header />
        <Content id="content-wrapper">{children}</Content>
        <Footer />
        <Background />
      </Container>
    );
  }
}

Layout.propTypes = propTypes;

export default withRouter(Layout);
