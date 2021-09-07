import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AdderNewObject, DialogPopup, Table } from "../../components";
import { requestGetObjects } from "../../sagas/objects";
import { Footer } from "../Footer/Footer.layout";
import { Header } from "../Header/Header.layout";

export const Main = (props) => {
  const dispatch = useDispatch();
  const objectsState = useSelector(state => state.objectsReducer);

  const [allObjects, setAllObjects] = useState([]);

  useEffect(() => {
    dispatch(requestGetObjects());
  }, []);

  useEffect(() => {
    const { objects } = objectsState;
    setAllObjects(objects);
  }, [objectsState]);

  return (
    <>
      <Header />
      <main className="main-section">
        <section className="table-section container">
          <div className="row">
            <div className="col s12">
              <Table data={allObjects} />
            </div>
          </div>
        </section>
      </main>
      <DialogPopup
        title={'Вы действительно хотите удалить этот объект?'}
      />
      <AdderNewObject />
      <Footer />
    </>
  );
}