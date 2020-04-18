import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NewGameDialog from "../../components/Main/components/NewGameDialog";

interface Props extends RouteComponentProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const Image = styled.img`
  margin-bottom: ${(props) => props.theme.spacing(2)}px;
`;

const Paragraph = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(2)}px;
`;

const Welcome = (_: Props) => {
  const [newGameDialogOpen, setNewGameDialogOpen] = React.useState(false);

  const handleNewGame = () => {
    setNewGameDialogOpen(true);
  };

  function handleClose() {
    setNewGameDialogOpen(false);
  }

  return (
    <Root>
      <Container>
        <NewGameDialog open={newGameDialogOpen} onClose={handleClose} />
        <Image src="https://media.giphy.com/media/MRFThBPEcopaaNfqz3/giphy.gif" />
        <Typography variant="h6">Hoe werkt het?</Typography>
        <Paragraph variant="body1">Bla</Paragraph>
        <div>
          <Button onClick={handleNewGame} color="secondary" variant="contained">
            <AddIcon />
            Nieuwe Bingo-kaart
          </Button>
        </div>
      </Container>
    </Root>
  );
};

export default Welcome;
