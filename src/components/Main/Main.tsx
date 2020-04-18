import React, { ReactNode } from "react";
import { RouteComponentProps } from "@reach/router";
import {
  AppBar as BaseAppBar,
  Toolbar,
  Typography,
  Drawer as BaseDrawer,
  Container as BaseContainer,
} from "@material-ui/core";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import BrandIcon from "@material-ui/icons/ChildFriendly";

interface Props {
  children: ReactNode;
}

const ToolbarOffset = styled.div`
  ${(props) => props.theme.mixins.toolbar}
`;
const Root = styled.div`
  display: flex;
  flex: 1;
`;
const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
`;

const AppBar = styled(BaseAppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

const Drawer = styled(BaseDrawer)`
  ${({ theme }) => `
    display: none;
    ${theme.breakpoints.up("md")} {
      display: block;
      width: 240px;
      flex-shrink: 0;
      .MuiDrawer-paper {
        width: 240px;
      }
    };
  `}
`;

const Main = ({ children }: RouteComponentProps & Props) => (
  <Root>
    <AppBar position="fixed">
      <Toolbar>
        <BrandIcon />
        <Typography variant="h5" noWrap>
          First Dates Drinking Bingo
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent">
      <ToolbarOffset />
      <Navigation />
    </Drawer>
    <Container>
      <ToolbarOffset />
      {children}
    </Container>
  </Root>
);

export default Main;
