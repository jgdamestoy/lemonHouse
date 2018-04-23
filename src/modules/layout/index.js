import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Header from "./header/";
import Footer from "./footer/";

const Container = styled.div`
`;
/* Hanlde min-height on all the App */
const Content = styled.div`min-height: calc(100vh);`;

const propTypes = {};

class Layout extends Component {
  render() {
    const { children  } = this.props;

    return (
      <Container>
        <Header />
        <Content id="content-wrapper">{children}</Content>
        <Footer />
      </Container>
    );
  }
}

Layout.propTypes = propTypes;

export default withRouter(Layout);
