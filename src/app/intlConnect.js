/*
*   Warpper that pass the correct translations to the App
*   Depending on the country found on the user browser preferrences
*   that can be override in the config for test
*/
import React, { Component } from "react";

import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import es from "react-intl/locale-data/es";
import de from "react-intl/locale-data/de";
import { config as CONFIG } from "config/";
import translations from "config/translations/";

/* -------- Init Intl ----------------- */
var areIntlLocalesSupported = require("intl-locales-supported");

var localesMyAppSupports = ["en", "fr", "de", "es"];

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    var IntlPolyfill = require("intl");
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require("intl");
}
/* --------- end of Intl part -------------*/

addLocaleData([...fr, ...en, ...es, ...de]);

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

export default IntlConnect;
