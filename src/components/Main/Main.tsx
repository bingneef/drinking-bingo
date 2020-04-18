import React, { ReactNode } from "react";
import { RouteComponentProps } from "@reach/router";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import NewGameDialog from "./components/NewGameDialog";
import { Root, AppBar, Link, Container, ToolbarOffset } from "./styles";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: RouteComponentProps & Props) => {
  const [newGameDialogOpen, setNewGameDialogOpen] = React.useState(false);

  const handleNewGame = () => {
    setNewGameDialogOpen(true);
  };

  const handleClose = () => {
    setNewGameDialogOpen(false);
  };

  return (
    <Root>
      <AppBar position="fixed">
        <NewGameDialog open={newGameDialogOpen} onClose={handleClose} />
        <Toolbar>
          <Link to="/">
            <Typography variant="h5" noWrap>
              <span role="img" aria-label="cocktail">
                🍸
              </span>{" "}
              First Dates Drinking Bingo
            </Typography>
          </Link>
          <Button onClick={handleNewGame} color="secondary" variant="contained">
            <Hidden mdUp>Nieuw</Hidden>
            <Hidden smDown>
              <AddIcon />
              Nieuwe Bingo-kaart
            </Hidden>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <ToolbarOffset />
        {children}
      </Container>
    </Root>
  );
};

export default Main;
