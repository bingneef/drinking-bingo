import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import themes from "../themes/themes";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import BaseBox from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StoreType } from "../store/types";
import { ThemeType } from "../themes/styled";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Box = styled(BaseBox)`
  display: flex;
  flex: 1;
`;

const StoreThemeProvider = ({ children }: Props) => {
  const preferences = useSelector((state: StoreType) => state.preferences);
  const theme: ThemeType = themes[preferences?.theme ?? "base"];

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>{children}</Box>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default StoreThemeProvider;
