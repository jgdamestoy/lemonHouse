import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { config as CONFIG } from "config/";

const ANIMATION_DURATION = 500;

const Animation = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-color: white;
  position: fixed;
  display: block;
  z-index: 1000;
  transition: top ${ANIMATION_DURATION}ms, left ${ANIMATION_DURATION}ms,
    width ${ANIMATION_DURATION}ms, height ${ANIMATION_DURATION}ms;
  ${({ dimensions, inProgress, height }) =>
    inProgress
      ? `
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
      `
      : `
        top: ${dimensions.top}px;
        left: ${dimensions.left}px;
        width: ${dimensions.width}px;
        height: ${dimensions.mobileHeight}px;
      `};
`;

class AnimateToCover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      complete: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.display && nextProps.display) {
      setTimeout(() => {
        this.setState({ inProgress: true });
      }, 10);
      setTimeout(() => {
        this.setState({ complete: true });
      }, 700);
    }
  }

  render() {
    const { display, playlist, height, url } = this.props;
    console.log(this.props.image);

    if (this.state.complete) {
      return <Redirect to={`/${CONFIG.LOCALE.concat(url)}`} />;
    } else {
      if (display) {
        window.scrollTo(0, 0);
      }
      return (
        <div>
          <Animation
            display={display}
            inProgress={this.state.inProgress}
            {...this.props}
          />
        </div>
      );
    }
  }
}

export default AnimateToCover;
