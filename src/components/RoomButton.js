import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { config as CONFIG } from "config/";
import { colors, fontSize, breakPoints } from "config/theme";

const StyledButton = styled.div`
  padding: 5px 10px;
  font-size: ${fontSize.description.mobile}
  font-weight: bold;
  color: ${colors.lemonYellow};
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${colors.lemonYellow};
  };
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.description.std};
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const propTypes = {
  label: PropTypes.string,
  to: PropTypes.string
};

class RoomButton extends Component {
  render() {
    const { label, to } = this.props;

    return (
      <StyledLink to={`/${CONFIG.LOCALE.concat(to)}`}>
        <StyledButton>{label}</StyledButton>
      </StyledLink>
    );
  }
}

RoomButton.propTypes = propTypes;

export default RoomButton;
