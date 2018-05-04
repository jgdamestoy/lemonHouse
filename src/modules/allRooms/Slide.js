import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img`
  width: 100%;
`;

const propTypes = {
  img: PropTypes.string,
  handleChangeState: PropTypes.func
};
const defaultProps = {};

class Slide extends Component {
  handleClick = () => {
    const { slug, index, img } = this.props;
    const { top, left, width, height } = document
      .getElementById(`${this.props.index}`)
      .getBoundingClientRect();

    this.props.handleChangeState({
      url: `/room/${slug}/${index}`,
      img: img,
      startAnimation: true,
      dimensions: { top, left, width, height }
    });
  };

  render() {
    const { img } = this.props;
    return (
      <Container onClick={this.handleClick}>
        <Img src={img} id={this.props.index} />
      </Container>
    );
  }
}

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
