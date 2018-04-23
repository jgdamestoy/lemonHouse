import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { config as CONFIG } from "config/config";

// import Header from "./header/HeaderCtn";
// import Footer from "./footer/components/Footer";

const Container = styled.div`
`;
/* Hanlde min-height on all the App */
const Content = styled.div`min-height: calc(100vh - 120px);`;

const propTypes = {
  location: PropTypes.object // current Location
};

class Layout extends Component {
  render() {
    const { children, menuOpen, onClick, location } = this.props;

    /* Determine which header to use (Classic or HomeMarket) */
    // @TODO can be improve
    let country = CONFIG.LOCALE_OVERRIDE || this.props.country || CONFIG.LOCALE;
    country = country.toLowerCase();
    const isHomeMarket =
      location.pathname === `/${country}` ||
      location.pathname === `/${country}/`;
    const isDevice =
      location.pathname === `/${country}/devices` ||
      location.pathname === `/${country}/devices/`;

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
