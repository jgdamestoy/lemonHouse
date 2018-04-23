import React, { PureComponent } from "react";
import styled from "styled-components";

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100vw;
  min-height: 100vh;
  transform: translateX(-50%) translateY(-50%);
`;

class Background extends PureComponent {
  render() {
    return (
      <Video
        muted
        autoPlay
        loop="loop"
        preload="true"
        poster={`/img/IMG_5970.JPG`}
        src={`/video/videoCover.mp4`}
      />
    )
  }
}

export default Background;
