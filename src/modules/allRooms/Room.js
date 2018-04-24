import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors} from "config/theme";

import RoomDescription from "./RoomDescription";
import Carousel from "./Carousel";

const Container = styled.div`
  display: flex;
  width: 80vw;
  border-bottom: 2px solid ${colors.lemonGreen};
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const propTypes = {
  room: PropTypes.object,
};
const defaultProps = {};

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, description, number, imgs, id } = this.props.room

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
Room.defaultProps = defaultProps;

export default Room;
