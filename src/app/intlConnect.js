/*
*   Warpper that pass the correct translations to the App
*   Depending on the country found on the user browser preferrences
*   that can be override in the config for test
*/
import React, { Component } from "react";
import PropTypes from "prop-types";

import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import { config as CONFIG } from "config/";
import translations from "translations/";

addLocaleData([...fr, ...en]);

const propTypes = {};
const defaultProps = {};

class IntlConnect extends Component {
  render() {
    const { children } = this.props;
    const country = CONFIG.LOCALE_OVERRIDE || CONFIG.LOCALE;

    return (
      <IntlProvider locale={country} messages={translations[country]}>
        {children}
      </IntlProvider>
    );
  }
}

IntlConnect.propTypes = propTypes;
IntlConnect.defaultProps = defaultProps;

export default IntlConnect;
