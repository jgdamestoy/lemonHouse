import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { config as CONFIG } from "config/";
import { colors } from "config/theme";

const Button = styled.div`
  text-align: center;
  margin-right: 1vw;
  padding: 1vh 1vw;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: rgba(243, 227, 49, 0.8);
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonGreen};
    border: 2px solid ${colors.lemonGreen};
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, to } = this.props;
    return (
      <StyledLink to={`/${CONFIG.LOCALE.concat(to)}`}>
        <Button>{label}</Button>
      </StyledLink>
    );
  }
}

StdButton.propTypes = propTypes;

export default StdButton;
