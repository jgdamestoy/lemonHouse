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
    width: 40vw;
    flex-direction: column;
    padding-bottom: 0vh;
  }
`;
const Type = styled.div`
  color: ${colors.lemonGreen};
  font-size: ${fontSize.subtitle.mobile};
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 10vw;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.subtitle.std};
    padding-bottom: 10vh;
    padding-right: 0vw;
  }
`;

const propTypes = {
  type: PropTypes.object,
  description: PropTypes.object,
  number: PropTypes.number,
  id: PropTypes.string
};

class RoomDescription extends Component {
  render() {
    const { type, description, number, id, intl } = this.props;
    const messages = defineMessages({
      room: {
        id: "allRooms.seeRoomButton",
        defaultMessage: "See the room"
      }
    });

    return (
      <Container>
        <Type>{intl.formatMessage(type)}</Type>

        <RoomButton
          label={intl.formatMessage(messages.room)}
          to={`/room/${id}`}
        />
      </Container>
    );
  }
}

RoomDescription.propTypes = propTypes;

export default injectIntl(RoomDescription);
