import React, { useState, useEffect, useRef } from "react";
import { RouteComponentProps } from "@reach/router";
import useComponentSize from "@rehooks/component-size";
import { useDelta } from "react-delta";
import BingoTile from "./components/BingoTile";
import { useTheme } from "@material-ui/core";
import Toast from "./components/Toast";
import { Root, Container, CellContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/types";
import { toggleItem } from "../../store/game/actions";

interface Props extends RouteComponentProps {}

const BingoCard = (_: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const game = useSelector((state: StoreType) => state.game.current);
  const { items = [], lines = 0, size = 3 } = game || {};

  const ref = useRef<HTMLDivElement>(null);
  const componentSize = useComponentSize(ref);
  const minContainerSize = Math.min(componentSize.width, componentSize.height);
  const cellSize = Math.min(
    minContainerSize / size - theme.spacing(3) / 2,
    200
  );

  const [toasterOpen, setToasterOpen] = useState(false);
  const linesDelta = useDelta(lines);
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

  function toggleListItem(id: number) {
    dispatch(toggleItem(id));
  }

  return (
    <Root ref={ref}>
      <Toast open={toasterOpen} setOpen={setToasterOpen} />
      <Container>
        <CellContainer cells={size} cellSize={cellSize}>
          {items.map(({ id, ...props }) => (
            <BingoTile
              key={id}
              id={id}
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
