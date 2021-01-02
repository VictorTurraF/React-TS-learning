import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import IndexRouter from 'routes';

const App = () => (
  <div className="App">
    <CssBaseline />
    <IndexRouter />
  </div>
);

export default App;
