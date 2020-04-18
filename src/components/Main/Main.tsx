import React, { ReactNode } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Toolbar, Typography } from "@material-ui/core";
import BrandIcon from "@material-ui/icons/ChildFriendly";
import Button from "@material-ui/core/Button";
import { newGame } from "../../store/game/actions";
import { useDispatch } from "react-redux";
import NewGameDialog from "./components/NewGameDialog";
import { Root, AppBar, Link, Container, ToolbarOffset } from "./styles";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: RouteComponentProps & Props) => {
  const dispatch = useDispatch();
  const [newGameDialogOpen, setNewGameDialogOpen] = React.useState(false);

  const handleNewGame = () => {
    setNewGameDialogOpen(true);
  };

  const handleClose = (size?: number) => {
    setNewGameDialogOpen(false);

    if (typeof size === "number") {
      dispatch(newGame(size));
      navigate("/bingo");
    }
  };

  return (
    <Root>
      <AppBar position="fixed">
        <NewGameDialog open={newGameDialogOpen} onClose={handleClose} />
        <Toolbar>
          <Link to="/">
            <BrandIcon />
            <Typography variant="h5" noWrap>
              First Dates Drinking Bingo
            </Typography>
          </Link>
          <Button onClick={handleNewGame} color="inherit">
            Nieuwe Bingo-kaart
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
