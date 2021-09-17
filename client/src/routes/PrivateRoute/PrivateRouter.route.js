import React from "react";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ component: Component, link = "/login", auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {
        props => (auth === true) ?
          <Redirect to={link} /> :
          <Component {...props} />
      }
    />
  )
}