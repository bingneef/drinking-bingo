import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Main from "../components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user/actions";
import BingoCard from "../pages/BingoCard/BingoCard";
import { StoreType } from "../store/types";
import Welcome from "../pages/Welcome/Welcome";

const RootRouter = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: StoreType) => state.game);

  useEffect(() => {
    dispatch(setUser({ accessToken: "1234" }));
  }, [dispatch]);

  if (!game.current) {
    return (
      <Router>
        <Main path="/">
          <Welcome default />
        </Main>
      </Router>
    );
  }

  return (
    <Router>
      <Main path="/">
        <BingoCard path="/bingo" />
        <Welcome default />
      </Main>
    </Router>
  );
};

export default RootRouter;
