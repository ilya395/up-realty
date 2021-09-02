import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './App.scss';

const App = () => {
  useEffect(async () => {
    const req = await fetch("/api/login");
    const data = await req.json();
    await console.log(data)
  });
    return (
        <>
          <h1>H1!</h1>
        </>
    );
}

export default App;