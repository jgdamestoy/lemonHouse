import React, { PureComponent } from "react";
import styled from "styled-components";

import { config as CONFIG } from "config/";
import { assets } from "config/theme";

const Container = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100vw;
  min-height: 100vh;
  transform: translateX(-50%) translateY(-50%);
  z-index: -100;
`;

class Poster extends PureComponent {
  render() {
    return <Container src={CONFIG.CDN.concat(assets.posterHomeCoverUrl)} />;
  }
}

export default Poster;
