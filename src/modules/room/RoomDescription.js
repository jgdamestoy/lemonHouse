import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "react-intl";

import { colors, fontSize, breakPoints } from "config/theme";
import { Link } from "react-router-dom";

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
  type: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number
};
const defaultProps = {};

class RoomDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, description, number, id, intl } = this.props;

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
