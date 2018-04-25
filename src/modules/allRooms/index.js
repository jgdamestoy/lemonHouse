import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { config as CONFIG } from "config/";
import { colors, breakPoints, fontSize } from "config/theme";
import { data } from "config/roomsData";
import Room from "./Room";
import BookingButton from "components/BookingButton";

const Container = styled.div`
  padding: 10vh 10vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: ${fontSize.title.mobile};
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.lemonGreen};
  padding: 3vh 5vw;
  background-color: ${colors.backgroundTextBlock};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakPoints.std}) {
    font-size: ${fontSize.title.std};
    padding: 3vh 15vw;
  }
`;

class AllRooms extends Component {
  render() {
    const { intl } = this.props;
    const messages = defineMessages({
      title: {
        id: "allRooms.title",
        defaultMessage: "Our rooms"
      },
      book: {
        id: "allRooms.book",
        defaultMessage: "Book now"
      }
    });

    return (
      <Container>
        <Title>{intl.formatMessage(messages.title)}</Title>

        {data.map((item, index) => <Room room={item} />)}

        <BookingButton
          to={CONFIG.BOOKIN_ADRESS}
          label={intl.formatMessage(messages.book)}
        />
      </Container>
    );
  }
}

export default injectIntl(AllRooms);
