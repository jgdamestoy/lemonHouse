import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { config as CONFIG } from "config/";
import { colors, fontSize, breakPoints } from "config/theme";

const BookingButton = styled.div`
  margin-top: 10vh;
  width: 60vw;
  text-decoration: none;
  text-align: center;
  font-size: ${fontSize.subtitle.mobile}
  font-weight: bold;
  padding: 5px 10px;
  color: ${colors.lemonYellow};
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  };
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.subtitle.std};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const propTypes = {
  label: PropTypes.string,
  to: PropTypes.string
};

class StdButton extends Component {
  render() {
    const { label, to } = this.props;
    return (
      <StyledLink to={`/${CONFIG.LOCALE.concat("/booking")}`}>
        <BookingButton>
          {label}
        </BookingButton>
      </StyledLink>
    );
  }
}

StdButton.propTypes = propTypes;

export default StdButton;
