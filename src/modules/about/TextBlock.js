import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import Waypoint from "react-waypoint";

import { colors, breakPoints, fontSize } from "config/theme";

const Container = styled.div`
  width: 70vw;
  font-size: ${fontSize.description.mobile};
  font-weight: 700;
  colors: ${colors.lemonGreen}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.animated ? colors.backgroundTextBlock : "transparent"};
  transition: background-color 1s ease;
  border-radius: 20px;
  padding: 5vw;
  @media (min-width: ${breakPoints.std}) {
    width: 46vw;
    padding: 2vw
    font-size: ${fontSize.description.std};
  }
`;

const propTypes = {
  text: PropTypes.object
};

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }
  handleAnimate = () => this.setState({ animated: true });

  render() {
    const { intl } = this.props;
    return (
      <div>
        <Container animated={this.state.animated}>
          {intl.formatMessage(this.props.text)}
        </Container>
        <Waypoint scrollableAncestor={window} onEnter={this.handleAnimate} />
      </div>
    );
  }
}

TextBlock.propTypes = propTypes;

export default injectIntl(TextBlock);
