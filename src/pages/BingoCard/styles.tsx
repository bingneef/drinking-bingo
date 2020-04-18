import React from "react";
import styled from 'styled-components';
import { range } from "lodash";

export const Root = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
    ${theme.breakpoints.up("md")} {
      padding: ${theme.spacing(2)}px;
    }
  `}
`;


export const CellContainer = styled(({ cells, cellSize, ...rest }) => (
  <div {...rest} />
))`
  display: grid;
  grid-template-columns: ${({ cells, cellSize }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-template-rows: ${({ cells, cellSize }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-gap: ${({ theme }) => theme.spacing(1)}px;
`;
