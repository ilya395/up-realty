import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './App.scss';
import { Router, BrowserRouter } from 'react-router-dom';
import { MainRoter } from './routes';
import { Loader } from './components';

const App = () => {

  return (
    <>
      <Loader />
      <BrowserRouter>
        <MainRoter />
      </BrowserRouter>
    </>
  );
}

export default App;