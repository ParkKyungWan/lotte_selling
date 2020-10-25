import React from 'react';
import './App.css';
import Song from './components/song/song'
import Young from './components/young/young'
//router
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <Song / >
    </React.Fragment>
  );
}

export default App;
  