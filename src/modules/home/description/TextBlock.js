import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors} from "config/theme"

const Container = styled.div`
    width: 50vw;
    font-size: 20px;
    font-weight: bold;
    colors: ${colors.lemonGreen}
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(243, 227, 49, 0.3);
    border-radius: 20px;
    padding: 15px;

`;

const propTypes = {
  text: PropTypes.string,
};
const defaultProps = {

};

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>{this.props.text}</Container>
    );
  }
}

TextBlock.propTypes = propTypes;
TextBlock.defaultProps = defaultProps;

export default TextBlock;
