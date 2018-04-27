import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, defineMessages } from "react-intl";

import { config as CONFIG } from "config/";
import { data } from "config/roomsData";
import { colors } from "config/theme";
import Carousel from "./Carousel";
import RoomDescription from "./RoomDescription";
import BookingButton from "components/BookingButton";

const Container = styled.div`
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  padding: 5vw;
  bottom: 10vh;
  left: 10vw;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 25px;
`;

const propTypes = {
  id: PropTypes.number
};

class Room extends Component {
  render() {
    const imgIndex = this.props.match.params.imgIndex;
    const currentSlug = this.props.match.params.slug;
    const room = data.filter(item => item.slug === currentSlug)[0];
    const { type, description, number, imgs, id } = room;

    const { intl } = this.props;
    const messages = defineMessages({
      book: {
        id: "room.book",
        defaultMessage: "Book now"
      }
    });
    return (
      <Container>
        <Carousel imgs={room.imgs} imgIndex={imgIndex} />

        <Content>
          <RoomDescription
            type={type}
            description={description}
            number={number}
            id={id}
          />

          <BookingButton
            to={CONFIG.BOOKING_ADRESS}
            label={intl.formatMessage(messages.book)}
          />
        </Content>
      </Container>
    );
  }
}

Room.propTypes = propTypes;

export default injectIntl(Room);
