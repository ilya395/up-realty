import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAddObject, requestEditeObject } from "../../sagas/objects/actions";
import { requestGetStatuses } from "../../sagas/statuses";
import { objectPopupIsNotVisibleAction } from "../../store/ObjectPopup";
import { dropObject, getObject } from "../../store/objects";
import "./ObjectPopup.component.scss";

export const ObjectPopup = props => {

  const { title, isOpen = false, saveMode = false, callback = null, data = null } = props;

  const dispatch = useDispatch();

  const stateObjects = useSelector(state => state.objectsReducer);

  const [open, setOpen] = useState(isOpen || false);
  const [editingMode, setEditingMode] = useState(false);
  const [objectData, setObjectData] = useState(null);

  const stateObjectPopup = useSelector(state => state.objectPopupReducer);

  useEffect(() => {
    const { isVisible, editing } = stateObjectPopup;
    const { checked } = stateObjects;
    setOpen(isVisible);
    setEditingMode(editing);
    checked ?
      setObjectData({
        ...checked,
        statusId: checked.status_id
      }):
      false;
  }, [stateObjectPopup]);
  useEffect(() => {
    editingMode ?
      dispatch(getObject({id: editingMode})) :
      false;
  }, [editingMode]);

  const [statusesList, setStatusesList] = useState([]);

  const statusesState = useSelector(state => state.statusesReducer);

  useEffect(() => {
    dispatch(requestGetStatuses());
  }, []);
  useEffect(() => {
    const { statuses } = statusesState;
    setStatusesList(statuses);
  }, [statusesState]);

  const closeHandler = () => {
    setOpen(false)
    dispatch(objectPopupIsNotVisibleAction());
    dispatch(dropObject());
    setObjectData(null)
  };

  const callbackHandler = () => {
    if (objectData && !objectData.statusId) {
      objectData.statusId = statusesList[0].id;
    }
    const { checked } = stateObjects;
    checked ?
      dispatch(requestEditeObject(objectData)) :
      dispatch(requestAddObject(objectData))
    closeHandler();
  }

  const changeInput = event => {
    const target = event.target;
    const obj = {
      ...objectData,
      [target.name]: +target.value
    };
    setObjectData(obj);
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
            {editingMode ? "Редактируем" : "Создаем"}
          </div>
          <div className="modal__component">
            <div className="form-container">
              <form id="form" name="form">
                <div className="input-field">
                  <select name="statusId" value={objectData ? objectData.statusId : (statusesList ? statusesList[0].id : "")} onChange={changeInput}>
                    {
                      statusesList ?
                        statusesList.map(item => <option value={item.id} key={item.id}>{item.name}</option>) :
                        false
                    }
                  </select>
                  <label htmlFor="square" className="active">Status</label>
                </div>
                <div className="input-field">
                  <input id="number" name="number" type="number" className="validate" required value={objectData ? objectData.number : ""} onChange={changeInput} />
                  <label htmlFor="number" className="active">Number</label>
                </div>
                <div className="input-field">
                  <input id="square" name="square" type="number" className="validate"  step="0.1" required value={objectData ? objectData.square : ""} onChange={changeInput} />
                  <label htmlFor="square" className="active">Square</label>
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