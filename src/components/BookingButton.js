import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "config/theme";

const BookingButton = styled.a`
  margin-top: 10vh;
  width: 60vw;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  }
`;

const propTypes = {
  label: PropTypes.string,
  to: PropTypes.string
};

class StdButton extends Component {
  render() {
    const { label, to } = this.props;
    return (
      <BookingButton target="_blank" href={to}>
        {label}
      </BookingButton>
    );
  }
}

StdButton.propTypes = propTypes;

export default StdButton;
