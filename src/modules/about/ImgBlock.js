import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Waypoint from "react-waypoint";

import { breakPoints } from "config/theme";

/*
transform: ${props =>
props.animated ? "translateX(0%)" : "translateX(300%)"};
transition: transform 1s ease;
*/

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakPoints.std}) {
    width: 30vw;
  }
`;
const Img = styled.img`
  width: 80%;
`;

const propTypes = {
  img: PropTypes.string
};
const defaultProps = {};

class ImgBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }
  handleAnimate = () => this.setState({ animated: true });

  render() {
    return (
      <div>
        <Container animated={this.state.animated}>
          <Img src={this.props.img} />
        </Container>
        <Waypoint scrollableAncestor={window} onEnter={this.handleAnimate} />
      </div>
    );
  }
}

ImgBlock.propTypes = propTypes;
ImgBlock.defaultProps = defaultProps;

export default ImgBlock;
