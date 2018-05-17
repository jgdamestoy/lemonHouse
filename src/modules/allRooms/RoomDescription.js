import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { colors, fontSize, breakPoints } from "config/theme";
import RoomButton from "components/RoomButton";

const Container = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
  @media (min-width: ${breakPoints.std}) {
    width: 30vw;
    flex-direction: column;
    padding-bottom: 0vh;
    padding-right: 3vw;
  }
`;
const Type = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.subtitle.mobile};
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 10vw;
  text-align: center;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.subtitle.std};
    padding-bottom: 3vh;
    padding-right: 0vw;
  }
`;
const Title = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.std.mobile};
  padding-right: 10vw;
  display: none;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.std.std};
    padding-bottom: 5vh;
    padding-right: 0vw;
    display: block;
  }
`;

const propTypes = {
  type: PropTypes.object,
  title: PropTypes.object,
  number: PropTypes.number,
  id: PropTypes.string
};

class RoomDescription extends Component {
  render() {
    const { type, title, intl, slug } = this.props;
    const messages = defineMessages({
      room: {
        id: "allRooms.seeRoomButton",
        defaultMessage: "See the room"
      }
    });

    return (
      <Container>
        <Type>{intl.formatMessage(type)}</Type>
        <Title>{intl.formatMessage(title)}</Title>

        <RoomButton
          label={intl.formatMessage(messages.room)}
          to={`/room/${slug}/0`}
        />
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;

export default injectIntl(RoomDescription);
