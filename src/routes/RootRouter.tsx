import React, { useEffect } from "react";
import { Router, Redirect } from "@reach/router";
import Main from "../components/Main/Main";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/actions";
import Dashboard from "../pages/BingoCard/BingoCard";
import NotFound from "../pages/NotFound/NotFound";

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ accessToken: "1234" }));
  }, [dispatch]);

  return (
    <Router>
      <Redirect
        from="/"
        to="bingo/3x3"
        noThrow
      />
      <Main path="/">
        <Dashboard path="/bingo/:size" />
        <NotFound default />
      </Main>
    </Router>
  );
};

export default RootRouter;
