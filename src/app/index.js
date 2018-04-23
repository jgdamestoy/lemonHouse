import React, { Component } from "react";
import { Router } from "react-router-dom";
import ReactGA from "react-ga";
import "classlist-polyfill"; // Polyfill for DOMElement.classList to work on IE
import styled from "styled-components";

import meta from "common/helpers/metaHelpers";
import history from "config/history";

import IntlConnect from "./components/IntlConnect";
import Layout from "modules/layout/";
import Routes from "./components/Routes";

const GlobalStyleWrapper = styled.div``;

class App extends Component {
  componentWillMount() {
    meta.reset();
  }

  render() {
    /*
    *   Will trigger on Route changes
    *   And google analytics pageview
    */
    history.listen((location, action) => {
      // ReactGA.pageview(
      //   `${location.pathname}${location.search}${location.hash}`
      // );
    });

    return (
      <IntlConnect>
        <Router history={history}>
          <GlobalStyleWrapper>
            <Layout>
              <Routes />
            </Layout>
          </GlobalStyleWrapper>
        </Router>
      </IntlConnect>
    );
  }
}

export default connect(App);
