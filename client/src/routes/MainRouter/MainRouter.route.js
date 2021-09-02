import React from "react";
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import { Login, Main } from "../../layouts";

export const MainRoter = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Main />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}