import React, { PureComponent } from "react";
import styled from "styled-components";

import { assets } from "config/theme";

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100vw;
  min-height: 100vh;
  transform: translateX(-50%) translateY(-50%);
  z-index: -100;
`;

class Background extends PureComponent {
  render() {
    return (
      <Video
        muted
        autoPlay
        loop="loop"
        preload="true"
        poster={assets.posterHomeCoverUrl}
        src={assets.videoHomeCoverUrl}
      />
    );
  }
}

export default Background;
