import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './App.scss';
import { Router, BrowserRouter } from 'react-router-dom';
import { MainRoter } from './routes';

const App = () => {
  useEffect(async () => {
    const req = await fetch("/api/login");
    const data = await req.json();
    await console.log(data)
  });

  return (
    <>
      <BrowserRouter>
        <MainRoter />
      </BrowserRouter>
    </>
  );
}

export default App;