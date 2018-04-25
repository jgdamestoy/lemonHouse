import React, { Component } from "react";
import { Router } from "react-router-dom";
import ReactGA from "react-ga";
import styled from "styled-components";

import meta from "helpers/metaHelper";
import history from "config/history";

import IntlConnect from "./intlConnect";
import Layout from "modules/layout/";
import Routes from "./routes";

const GlobalStyleWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgba(243, 227, 49, 0.1);
`;

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

export default App;
