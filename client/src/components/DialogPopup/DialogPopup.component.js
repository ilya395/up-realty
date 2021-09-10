import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dialogPopupIsNotVisibleAction } from "../../store/dialogPopup/actions/action-creators/dialogPopup.action-creator";
import "./DialogPopup.component.scss";

export const DialogPopup = props => {

  const { title, isOpen = false, saveMode = false, callback = null } = props;

  const dispatch = useDispatch();

  const state = useSelector(state => state.dialogPopupReducer);

  const [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    const { isVisible } = state;
    setOpen(isVisible);
  }, [state]);

  const closeHandler = () => {
    setOpen(false)
    dispatch(dialogPopupIsNotVisibleAction());
  };

  const callbackHandler = () => {
    if (callback) {
      callback(state.checked);
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
          {/* <div className="modal__component">
          </div> */}
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