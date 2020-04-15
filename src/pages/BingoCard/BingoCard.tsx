import React, { useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useToggleList from "../../hooks/useToggleList";
import range from "lodash/range";
import shuffle from "lodash/shuffle";
import data from "../../data/first-dates.json";

interface Props extends RouteComponentProps {
  size?: string;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CellContainer = styled(({ cells, cellSize, ...rest }) => <div {...rest} />)`
  display: grid;
  grid-template-columns: ${({ cells, cellSize }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-gap: ${({ theme }) => theme.spacing(2)}px;
`;

const Cell = styled(({ toggled, lineToggled, cellSize, ...rest }) => <Paper {...rest} />)`
  height: ${({ cellSize }) => `${cellSize}px`};
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ toggled }) => toggled && "background-color: red;"}
  ${({ lineToggled }) => lineToggled && "background-color: blue;"}
`;

const CellLabel = styled(Typography)`
  text-align: center;
`;

const Dashboard = ({size: propsSize}: Props) => {
  const size = Number.parseInt(propsSize || '') || 3
  const [list, setList, toggleListItem] = useToggleList([]);

  const sizing = Math.min(window.innerHeight, window.innerWidth);
  const cellSize = Math.min((sizing - 200) / size, 240);

  useEffect(() => {
    const selection = shuffle(data.items)
      .slice(0, size ** 2)
      .map((label, index) => ({ label, key: index, toggled: false }));

    setList(selection);
  }, [size, setList]);

  return (
    <Root>
      <Container>
        <CellContainer cells={size} cellSize={cellSize}>
          {list.map(({ key, label, toggled, rowToggled, colToggled }) => (
            <Cell
              key={key}
              cellSize={cellSize}
              onClick={() => toggleListItem(key)}
              toggled={toggled}
              lineToggled={rowToggled || colToggled}
            >
              <CellLabel variant="subtitle2">{label}</CellLabel>
            </Cell>
          ))}
        </CellContainer>
      </Container>
    </Root>
  );
};

export default Dashboard;
