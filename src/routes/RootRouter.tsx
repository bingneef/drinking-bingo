import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Main from "../components/Main/Main";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/actions";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ accessToken: "1234" }));
  }, [dispatch]);

  return (
    <Router>
      <Main path="/">
        <Dashboard path="/" />
        <NotFound default />
      </Main>
    </Router>
  );
};

export default RootRouter;
