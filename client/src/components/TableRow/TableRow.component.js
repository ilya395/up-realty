import React from "react";
import { useDispatch } from "react-redux";
import { dialogPopupIsVisibleAction } from "../../store/dialogPopup/actions/action-creators/dialogPopup.action-creator";

export const TableRow = props => {

  const dispatch = useDispatch();

  const { data } = props;

  const { id, number, square, statusName } = data;

  const deleteHandler = () => {
    dispatch(dialogPopupIsVisibleAction())
  }

  const editHandler = () => {}

  return (
    <tr>
      <td>{number}</td>
      <td>{square}</td>
      <td>{statusName}</td>
      <td className="table-section__buttons-cell">
        <button className="waves-effect waves-light btn">
          <i className="material-icons">edit</i>
        </button>
        <button className="waves-effect waves-light btn" onClick={deleteHandler}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
}