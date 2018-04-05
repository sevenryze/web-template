import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: red;
  font-size: 3rem;
`;

export class HomePage extends React.PureComponent<{}, {}> {
  render() {
    return <Header> World </Header>;
  }
}
