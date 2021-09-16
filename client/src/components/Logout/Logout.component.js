import React from "react";
import { useDispatch } from 'react-redux';
import { authEndAction } from "../../store/login";
import { removeToken } from "../../utils/token";

export const Logout = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(authEndAction());
    removeToken();
  }
  return (
    <>
      <button
        className="waves-effect waves-light btn right"
        id="logout"
        onClick={click}
      >
        Logout
      </button>
    </>
  );
}