import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, breakPoints } from "config/theme";
import RoomDescription from "./RoomDescription";
import Carousel from "./Carousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  border-bottom: 2px solid ${colors.lemonGreen};
  padding: 5vh 0;
  @media (min-width: ${breakPoints.std}) {
    flex-direction: row;
  }
`;

const propTypes = {
  room: PropTypes.object
};

class Room extends Component {
  render() {
    const { type, description, number, imgs, id } = this.props.room;

    return (
      <Container>
        <RoomDescription
          type={type}
          description={description}
          number={number}
          id={id}
        />
        <Carousel imgs={imgs} id={id} />
      </Container>
    );
  }
}

Room.propTypes = propTypes;

export default Room;
