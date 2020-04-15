import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useToggleList from "../../hooks/useToggleList";
import range from "lodash/range";
import shuffle from "lodash/shuffle";
import data from "../../data/first-dates.json";

interface Props extends RouteComponentProps {}

const cellSize = 240;
const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  flex-direction: column;
`;

const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CellContainer = styled(({ cells, ...rest }) => <div {...rest} />)`
  display: grid;
  grid-template-columns: ${({ cells }) =>
    range(cells)
      .map((_) => `${cellSize}px`)
      .join(" ")};
  grid-gap: ${({ theme }) => theme.spacing(2)}px;
`;

const Cell = styled(({ toggled, lineToggled, ...rest }) => <Paper {...rest} />)`
  height: ${cellSize}px;
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

const Dashboard = (_: Props) => {
  const [size, setSize] = useState(3);
  const [list, setList, toggleListItem] = useToggleList([]);

  useEffect(() => {
    const selection = shuffle(data.items)
      .slice(0, size ** 2)
      .map((label, index) => ({ label, key: index, toggled: false }));

    console.log(selection);
    setList(selection);
  }, [size, setList]);

  console.log({ list, size });
  return (
    <Root>
      <Container>
        <ActionRow>
          <Button onClick={() => setSize(2)}>2x2</Button>
          <Button onClick={() => setSize(3)}>3x3</Button>
          <Button onClick={() => setSize(4)}>4x4</Button>
          <Button onClick={() => setSize(5)}>5x5</Button>
        </ActionRow>
        <CellContainer cells={size}>
          {list.map(({ key, label, toggled, rowToggled, colToggled }) => (
            <Cell
              key={key}
              onClick={() => toggleListItem(key)}
              toggled={toggled}
              lineToggled={rowToggled || colToggled}
            >
              <CellLabel variant="h6">{label}</CellLabel>
            </Cell>
          ))}
        </CellContainer>
      </Container>
    </Root>
  );
};

export default Dashboard;
