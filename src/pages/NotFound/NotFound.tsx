import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {}

const Root = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing(2)}px;
`;

const NotFound = (_: Props) => {
  return (
    <Root>
      <Container>NotFound</Container>
    </Root>
  );
};

export default NotFound;
