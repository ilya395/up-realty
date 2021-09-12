import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Loader.component.scss";

export const Loader = props => {
  const [active, setActive] = useState(true);
  const stateObjects = useSelector(state => state.objectsReducer);
  const stateLogin = useSelector(state => state.loginReducer);
  const stateDialogPopup = useSelector(state => state.dialogPopupReducer);
  const stateObjectPopup = useSelector(state => state.objectPopupReducer);

  useEffect(() => {
    const { await: awaitObjects } = stateObjectPopup;

    const { await: awaitLogin } = stateLogin;

    const { await: awaitObjectPopup } = stateObjectPopup;

    console.log(awaitObjects, awaitLogin, awaitObjectPopup)

    if (awaitObjects || awaitLogin || awaitObjectPopup) {
      setActive(true)
    }
    if (!awaitObjects && !awaitLogin && !awaitObjectPopup) {
      setActive(false)
    }
  }, [stateObjects, stateLogin, stateDialogPopup, stateObjectPopup]);

  return active ?
    <div className="loader-wrap">
      <div className="loader-container">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div> :
    <></>
}