import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "react-intl";

import { colors, fontSize, breakPoints } from "config/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  @media (min-width: ${breakPoints.std}) {
    width: 40vw;
  }
`;
const Type = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.subtitle.mobile};
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 3vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.subtitle.std};
  }
`;
const Description = styled.div`
  color: ${colors.lemonWhite};
  font-size: ${fontSize.description.mobile};
  padding-bottom: 5vh;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.description.std};
  }
`;

const propTypes = {
  type: PropTypes.object,
  description: PropTypes.object,
  number: PropTypes.number,
  id: PropTypes.string
};
const defaultProps = {};

class RoomDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, description, intl } = this.props;

    return (
      <Container>
        <Type>{intl.formatMessage(type)}</Type>

        <Description>{intl.formatMessage(description)}</Description>
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;
RoomDescription.defaultProps = defaultProps;

export default injectIntl(RoomDescription);
