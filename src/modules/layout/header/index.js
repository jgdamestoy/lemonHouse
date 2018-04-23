import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "config/theme";


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
  border-bottom: ${props =>
     props.opaque ? `2px solid ${colors.lemonYellow}` : "none"};
  transition: background-color 1s ease;
  background-color: ${props =>
    props.opaque ? "rgba(240, 240, 240, 0.5)" : "transparent"};
`;
const Logo = styled.img`
  width: 250px;
`;
const LeftContent = styled.div`
  margin-left: 15px;
`;
const RightContent = styled.div`
  margin-right: 15px;
  display: flex;
`;
const Button = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: rgba(243, 227, 49, 0.8);
  border: 2px solid transparent;
  &:hover {
    color: ${colors.lemonGreen};
    border: 2px solid ${colors.lemonGreen};
  }
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
        <Wrapper opaque={this.state.scrolled}>
          <LeftContent >
            <Logo src="/img/logoH.png" />
          </LeftContent>
          
          <RightContent>
            <Button>About</Button>
            <Button>Rooms</Button>
            <Button>What's around</Button>
          </RightContent>
        </Wrapper>
      </Container>
    );
  }
}

ClassicHeader.propTypes = propTypes;

export default ClassicHeader;
