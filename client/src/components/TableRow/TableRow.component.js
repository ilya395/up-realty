import React from "react";
import { useDispatch } from "react-redux";
import { dialogPopupIsVisibleAction } from "../../store/dialogPopup/actions/action-creators/dialogPopup.action-creator";
import { objectPopupIsVisibleAction } from "../../store/ObjectPopup";

export const TableRow = props => {

  const dispatch = useDispatch();

  const { data } = props;

  const { id, number, square, statusName } = data;

  const deleteHandler = () => {
    dispatch(dialogPopupIsVisibleAction(id))
  }

  const editHandler = () => {
    dispatch(objectPopupIsVisibleAction(id));
  }

  return (
    <tr>
      <td>{number}</td>
      <td>{square}</td>
      <td>{statusName}</td>
      <td className="table-section__buttons-cell">
        <button className="waves-effect waves-light btn" onClick={editHandler}>
          <i className="material-icons">edit</i>
        </button>
        <button className="waves-effect waves-light btn" onClick={deleteHandler}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
}