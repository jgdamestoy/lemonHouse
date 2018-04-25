import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakPoints } from "config/theme";

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
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Img src={this.props.img} />
      </Container>
    );
  }
}

ImgBlock.propTypes = propTypes;
ImgBlock.defaultProps = defaultProps;

export default ImgBlock;
