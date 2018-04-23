import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    padding: 10vw;
`;

const propTypes = {};
const defaultProps = {};

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque porta pulvinar lacus ac porta. Aenean vehicula mi 
        varius tortor congue, eu sagittis urna scelerisque. Vivamus 
        gravida, libero quis fermentum feugiat, turpis leo dapibus augue, 
        et condimentum ipsum massa eu neque. Aliquam vitae nibh et nunc 
        mollis pretium. Phasellus nulla diam, suscipit non posuere sed, 
        pharetra eu eros. Nulla viverra commodo condimentum. Proin 
        pellentesque consectetur luctus. Suspendisse varius dolor ligula. 
        Suspendisse porta a turpis et laoreet. In vel elit molestie, 
        consectetur nulla id, tincidunt tellus. Fusce nec lacinia nibh. 
        Aliquam pellentesque arcu mauris, a euismod nulla mattis consectetur. 
        Nulla euismod nunc est.
        Sed consectetur tempor molestie. Duis lobortis efficitur nisi. 
        Proin sapien quam, pharetra sed ipsum et, condimentum facilisis sem. 
        Nam vitae mattis elit. Nullam vitae consectetur lorem. 
        Pellentesque ornare ante et purus scelerisque rhoncus. 
        Vestibulum non varius erat, non ultricies dolor. Praesent 
        at volutpat justo, at pulvinar nunc. Sed facilisis massa massa, 
        eu rhoncus diam finibus non. Cras ac velit nibh. 
        Vestibulum vulputate arcu in porttitor vestibulum. Donec eget arcu dui.
      </Container>
    )
  }
}

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
