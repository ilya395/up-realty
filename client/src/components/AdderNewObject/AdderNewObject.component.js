import React from "react";
import { useDispatch } from "react-redux";
import { objectPopupIsVisibleAction } from "../../store/ObjectPopup";

export const AdderNewObject = () => {

  const dispatch = useDispatch();

  const newObjectHandler = () => {
    dispatch(objectPopupIsVisibleAction());
  }

  return (
    <a className="btn-floating btn-floating_custom btn-large waves-effect waves-light red" id="add-new-object" onClick={newObjectHandler}><i className="material-icons">add</i></a>
  );
}