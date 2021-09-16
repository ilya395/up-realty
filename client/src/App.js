import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './App.scss';
import { Router, BrowserRouter, StaticRouter } from 'react-router-dom';
import { MainRoter } from './routes';
// import { Loader } from './components';

import { Provider, useDispatch } from 'react-redux';

import { store } from "./store";

const App = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch();
  // }, []);

  return (
    <Provider store={store}>

      <MainRoter />
      {/* <BrowserRouter>
        <MainRoter />
      </BrowserRouter> */}

    </Provider>
  );
}

export default App;