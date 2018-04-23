import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
`;
/* Move the fixed header via left propertie unstead of translate on IE */
const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid #191927;
  transition: background-color 1s ease;
  background-color: ${props =>
    props.opaque ? "rgba(18,17,26,0.9)" : "#181726"};
`;
const WrapperLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const propTypes = {
};

class ClassicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  /* Change oppacity onScroll */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (this.state.scrolled === false && window.scrollY !== 0) {
      this.setState({ scrolled: true });
    } else if (this.state.scrolled === true && window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    return (
      <Container>
        <Wrapper opaque={this.state.scrolled} isMenuOpen={isMenuOpen}>
          <WrapperLogo>
          </WrapperLogo>
          HEADER
        </Wrapper>
      </Container>
    );
  }
}

ClassicHeader.propTypes = propTypes;

export default ClassicHeader;
