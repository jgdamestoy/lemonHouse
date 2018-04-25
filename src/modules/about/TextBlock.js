import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "react-intl";

import { colors, breakPoints, fontSize } from "config/theme";

const Container = styled.div`
  width: 70vw;
  font-size: ${fontSize.description.mobile};
  font-weight: 700;
  colors: ${colors.lemonGreen}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundTextBlock};
  border-radius: 20px;
  padding: 5vw;
  @media (min-width: ${breakPoints.std}) {
    width: 46vw;
    padding: 2vw
    font-size: ${fontSize.description.std};
  }
`;

const propTypes = {
  text: PropTypes.string
};

class TextBlock extends Component {
  render() {
    const { intl } = this.props;
    return <Container>{intl.formatMessage(this.props.text)}</Container>;
  }
}

TextBlock.propTypes = propTypes;

export default injectIntl(TextBlock);
