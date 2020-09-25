import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/route-3" >
          Route 3
        </Route>
        <Route exact path="/route-2" >
          Route 2
        </Route>
        <Route path="/route-1">
          Route 1
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
