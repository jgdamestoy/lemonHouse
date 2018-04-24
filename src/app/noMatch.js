import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { defineMessages, injectIntl } from "react-intl";

import { config as CONFIG } from "config/";
import { colors, fontSize } from "config/theme";

const messages = defineMessages({
  title: {
    id: "noMatch.title",
    defaultMessage: "Unavailable page"
  },
  description: {
    id: "noMatch.description",
    defaultMessage:
      "The address may contain typing errors. Our website may be experiencing difficulties"
  },
  backToHome: {
    id: "noMatch.backToHome",
    defaultMessage: "Back to home"
  }
});

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0vw 10vw;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${colors.lemonGreen}
  font-size: ${fontSize.title}
  padding-bottom: 10vh;
`;
const Description = styled.div`
  color: ${colors.lemonGreen}
  font-size: ${fontSize.subtitle}
`;

/*
*   Check if it must append /country to the url
*   to redirect to an known url
*   or display 404
*/
const propTypes = {
};
const defaultProps = {};

const redirectCountry = (pathname, country, knownCountries) => {
  /*
  *  Check if pathname start with country
  *  If not, check if it start with another known country and remove it
  *  then append the country to pathname and return it
  *  else return null
  */
  const currentCountry = pathname.substring(1, 3);
  if (currentCountry !== `${country}`) {
    if (knownCountries.indexOf(currentCountry) !== -1) {
      pathname = pathname.substring(3);
    }
    return `/${country}${pathname}`;
  }
  return;
};

const NoMatch = ({ intl, history, location }) => {
  console.debug("NOMATCH WRONG URL", location.pathname);

  /* Check if user need to be redirect */
  if (location) {
    const redirect = redirectCountry(
      location.pathname,
      CONFIG.LOCALE,
      CONFIG.KNOW_COUNTRIES
    );

    if (redirect) {
      history.push(redirect);
    }
  }

  return (
    <Container>
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Description>{intl.formatMessage(messages.description)}</Description>
    </Container>
  );
};

NoMatch.propTypes = propTypes;
NoMatch.defaultProps = defaultProps;

export default injectIntl(NoMatch);
