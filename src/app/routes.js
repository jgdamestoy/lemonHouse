/*
*   Routes Index Component, Main route switch and sub routes group
*   Get the country and handle the fact that the route ust be prefixed
*   with it, otherwise redirect to NoMatch fallback
*   NoMatch Components will try to correct the prefixe if it's uncorrect
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

import { config as CONFIG } from "config";

import Home from "modules/home/";
import NoMatch from "./noMatch";


const propTypes = {
};

class Routes extends Component {
  render() {
    const country = CONFIG.LOCALE_OVERRIDE || CONFIG.LOCALE;

    return (
      <Switch>
        <Route exact path={`/${country}`} component={Home} />

        <Route render={props => <NoMatch country={country} {...props} />} />
      </Switch>
    );
  }
}

Routes.propTypes = propTypes;

export default Routes;
