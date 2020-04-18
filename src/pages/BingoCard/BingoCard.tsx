import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import useComponentSize from "@rehooks/component-size";
import { useDelta } from 'react-delta';
import range from "lodash/range";
import useToggleList from "../../hooks/useToggleList";
import data from "../../data/first-dates.json";
import BingoTile from "./components/BingoTile";
import { useTheme } from "@material-ui/core";
import shuffle from "../../helpers/shuffle";
import { generateSeed } from "../../helpers/shuffle";
import Toast from "./components/Toast";

interface Props extends RouteComponentProps {
  size?: string;
  seed?: string;
}

const Root = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
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

const CellContainer = styled(({ cells, cellSize, ...rest }) => (
  <div {...rest} />
))`
  display: grid;
  grid-template-columns: ${({ cells, cellSize, theme }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-template-rows: ${({ cells, cellSize, theme }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-gap: ${({ theme }) => theme.spacing(1)}px;
`;

const BingoCard = ({ size: propsSize }: Props) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const componentSize = useComponentSize(ref);
  const [list, lines, setList, toggleListItem] = useToggleList([]);
  const [toasterOpen, setToasterOpen] = useState(false);
  const linesDelta = useDelta(lines);

  const size = Number.parseInt(propsSize || "") || 3;
  const minContainerSize = Math.min(componentSize.width, componentSize.height);
  const cellSize = Math.min(
    minContainerSize / size - theme.spacing(3) / 2,
    200
  );

  useEffect(() => {
    let seed = 0;
    try {
      seed = Number.parseInt(window.location.pathname.split("/")[3]);
    } catch {
      /* no action required */
    }

    if (!seed) {
      seed = generateSeed();
      window.location.pathname = window.location.pathname + "/" + seed;
    }

    const selection = shuffle(data.items, seed)
      .slice(0, size ** 2)
      .map((label, index) => ({ label, key: index, toggled: false }));

    setList(selection);
  }, [size, setList]);

  useEffect(() => {
    if (linesDelta === null || linesDelta === undefined) {
      return;
    }

    const curr = linesDelta.curr || 0;
    const prev = linesDelta.prev || 0;

    if (curr > prev) {
      setToasterOpen(true);
    }
  }, [linesDelta]);

  return (
    <Root ref={ref}>
      <Toast open={toasterOpen} setOpen={setToasterOpen} />
      <Container>
        <CellContainer cells={size} cellSize={cellSize}>
          {list.map(({ key, ...props }) => (
            <BingoTile
              key={key}
              id={key}
              toggleListItem={toggleListItem}
              {...props}
            />
          ))}
        </CellContainer>
      </Container>
    </Root>
  );
};

export default BingoCard;
