import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

import { config as CONFIG } from "config/";
import { breakPoints } from "config/theme";

const Container = styled.div`
  width: 80vw;
  height: 60vw;
  @media (min-width: ${breakPoints.std}) {
    width: 40vw;
    height: 30vw;
  }
`;
//@TODO fix marquer
const BluePoint = styled.div`
  color: blue;
  font-size: 30px;
`;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: CONFIG.GOOGLE_MAP_LAT,
      lng: CONFIG.GOOGLE_MAP_LNG
    },
    zoom: CONFIG.GOOGLE_MAP_ZOOM
  };

  render() {
    return (
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: CONFIG.GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <BluePoint lat={this.props.center.lat} lng={this.props.center.lng}>
            .
          </BluePoint>
        </GoogleMapReact>
      </Container>
    );
  }
}

export default SimpleMap;
