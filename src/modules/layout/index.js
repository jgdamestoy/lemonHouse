import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Header from "./header/";
import Footer from "./footer/";
import Background from "./Background";
import Poster from "./Poster";

const Container = styled.div``;
/* Hanlde min-height on all the App */
const Content = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
`;

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

class Layout extends Component {
  componentDidUpdate(prevProps) {
    /* Handle scroll on routes change */
    window.scroll(
      {
        top: 0,
        left: 0,
        behavior: "smooth"
      },
      null
    );
  }

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Header />
        <Content id="content-wrapper">{children}</Content>
        <Footer />
        {!detectmob() ? <Background /> : <Poster />}
      </Container>
    );
  }
}
export default withRouter(Layout);
