import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {config as CONFIG} from "config/";

import styled from "styled-components";

const BluePoint = styled.div`
  color: blue;
  font-size: 30px;
`;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 9.5712776,
      lng: 99.99607370000001
    },
    zoom: 12
  };

  render() {
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: CONFIG.GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <BluePoint
            lat={9.5712776}
            lng={99.99607370000001}
            >.</BluePoint>
        </GoogleMapReact>
    );
  }
}

export default SimpleMap;
