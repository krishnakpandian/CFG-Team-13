import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Initiative from './Components/Initiative/Initiative';
import Costs from './Components/Costs/Costs';
import Stories from './Components/Stories/Stories';
import Events from './Components/Events/Events';
import LargeEvent from './Components/LargeEvent/LargeEvent';

function App() {
  return (
    <div className="App">


    <Router>
      <Header/>
      <Switch>
        <Route exact path="/comment/:id" >
          <LargeEvent/>
        </Route>
        <Route exact path="/stories" >
          <Stories/>
        </Route>
        <Route exact path="/initiative">
          <Events/>
        </Route>
        <Route exact path="/cost">
          <Costs/>
        </Route>
        <Route path="/">
          <h1>home page being built</h1>
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
