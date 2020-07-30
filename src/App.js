import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" component={ Home }></Route>
      <Route component={ Error }/>
    </Switch>
    </div>
  );
}

export default App;
