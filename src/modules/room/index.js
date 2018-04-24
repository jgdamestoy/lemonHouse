import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {data} from "modules/roomsData";
import {colors} from "config/theme";

import Carousel from "./Carousel";
import RoomDescription from "./RoomDescription"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BookingButton = styled.a`
  margin-top: 10vh;
  width: 60vw;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.lemonGreen};
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonYellow};
    border: 2px solid ${colors.lemonYellow};
  };
`;

const propTypes = {
  id: PropTypes.number,
};
const defaultProps = {};

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currentId = this.props.match.params.id
    const room = data.filter(item => item.id === currentId)[0];
    const { type, description, number, imgs, id } = room;
    return (
      <Container>
        <Carousel imgs={room.imgs} />
        
        <BookingButton 
          target="_blank"
          href="https://www.booking.com/index.fr.html"
        >
          Book Now
        </BookingButton>

        <RoomDescription 
          type={type}
          description={description}
          number={number}
          id={id}
        />
      </Container>
    );
  }
}

Room.propTypes = propTypes;
Room.defaultProps = defaultProps;

export default Room;
