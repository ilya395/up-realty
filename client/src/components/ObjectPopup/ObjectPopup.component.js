import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestGetStatuses } from "../../sagas/statuses";
import { objectPopupIsNotVisibleAction } from "../../store/ObjectPopup";
import "./ObjectPopup.component.scss";

export const ObjectPopup = props => {

  const { title, isOpen = false, saveMode = false, callback = null, data = null } = props;

  const dispatch = useDispatch();

  const state = useSelector(state => state.dialogPopupReducer);

  const [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    const { isVisible } = state;
    setOpen(isVisible)
  }, [state]);

  const [statuses, setStatuses] = useState([]);
  const statusesState = useSelector(state => state.statusesReducer);
  useEffect(() => {
    dispatch(requestGetStatuses());
    console.log(statusesState)
  }, [statusesState]);

  const closeHandler = () => {
    setOpen(false)
    dispatch(objectPopupIsNotVisibleAction());
  };

  const callbackHandler = () => {
    if (callback) {
      callback();
    }
    closeHandler();
  }

  if (!open) {
    return (
      <>
      </>
    );
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal__close-btn" data-object="close" onClick={closeHandler}></div>
        <div className="modal__content">
          <div className="modal__title">
            {title}
          </div>
          <div className="modal__component">
            <div className="form-container">
              <form id="form" name="form">
                <div className="input-field">
                  <select name="status">
                    {
                      data.statuses.map(item => `<option value="${item.id}" ${ data.status && +data.status === +item.id ? "selected" : "" }>${item.name}</option>`).join("")
                    }
                  </select>
                  <label for="square" className="active">Status</label>
                </div>
                <div className="input-field">
                  <input id="number" name="number" type="number" className="validate" required value={data && data.number ? data.number : ''} />
                  <label for="number" className="active">Number</label>
                </div>
                <div className="input-field">
                  <input id="square" name="square" type="number" className="validate" required value={data && data.square ? data.square : ''} />
                  <label for="square" className="active">Square</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        {
          saveMode ?
          <div className="modal__footer">
            <button className="modal__dialog-btn waves-effect waves-light btn" data-object="agree" onClick={callbackHandler}>Сохранить</button>
            <button className="modal__dialog-btn waves-effect waves-light btn" data-object="close" onClick={closeHandler}>Отмена</button>
          </div> :
          <div className="modal__footer">
            <button className="modal__dialog-btn waves-effect waves-light btn" data-object="agree" onClick={callbackHandler}>Да</button>
            <button className="modal__dialog-btn waves-effect waves-light btn" data-object="close" onClick={closeHandler}>Нет</button>
          </div>
        }
      </div>
    </div>
  );
}