import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from "react-redux";

import { Login, Main } from "../../layouts";
import { getToken } from "../../utils/token";

export const MainRoter = () => {

  const [tokenInComponent, setTokenInComponent] = useState(getToken());

  const state = useSelector(state => state.loginReducer);

  useEffect(() => {
    setTokenInComponent(getToken());
  }, []);
  useEffect(() => {
    setTokenInComponent(getToken());
  }, [state]);

  if (!tokenInComponent) {
    return (
      <Switch>
        <Route
          path="/login"
        >
          <Login />
        </Route>
        <Route
          path="*"
        >
          <Login />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      {/* <PrivateRoute
        path="/login"
        auth={true}
        component={() => (<Login />)}
      /> */}
      <Route
        path="/login"
      >
        {
          tokenInComponent ?
            <Redirect to="/" /> :
            <Login />
        }
      </Route>
      <Route
        exact={true}
        path="/"
      >
        {
                  // render={() => {
                  //   if(typeof tokenInComponent === 'undefined' || !tokenInComponent) {
                  //     return <Redirect to='/login' />
                  //   } else {
                  //     return <Main/>
                  //   };
                  // }}
        }
        {
          !tokenInComponent ?
            <Redirect to="/login" /> :
            <Main />
        }
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}