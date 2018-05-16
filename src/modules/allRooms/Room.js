import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, breakPoints } from "config/theme";
import RoomDescription from "./RoomDescription";
import Carousel from "./Carousel";
import AnimateToCover from "components/AnimateToCover";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  border-bottom: 2px solid ${colors.lemonYellow};
  padding: 5vh 0;
  @media (min-width: ${breakPoints.std}) {
    flex-direction: row;
  }
`;

const propTypes = {
  room: PropTypes.object
};

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      img: null,
      startAnimation: false,
      dimensions: {}
    };
  }

  handleChangeState = state => {
    console.log(state);
    this.setState({
      url: state.url,
      img: state.img,
      startAnimation: state.startAnimation,
      dimensions: state.dimensions
    });
  };

  render() {
    const { type, description, number, imgs, id, slug } = this.props.room;

    return (
      <Container>
        <RoomDescription
          type={type}
          description={description}
          number={number}
          id={id}
          slug={slug}
        />
        <Carousel
          imgs={imgs}
          id={id}
          slug={slug}
          handleChangeState={this.handleChangeState}
        />
        <AnimateToCover
          url={this.state.url}
          image={this.state.img}
          dimensions={this.state.dimensions}
          display={this.state.startAnimation}
        />
      </Container>
    );
  }
}

Room.propTypes = propTypes;

export default Room;
