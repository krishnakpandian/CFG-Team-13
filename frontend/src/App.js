import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Initiative from './Components/Initiative/Initiative';
import Costs from './Components/Initiative/Initiative';
import Stories from './Components/Stories/Stories';
import Events from './Components/Events/Events';

function App() {
  return (
    <div className="App">
    <Header/>

    <Router>
    <Link to="/">Home</Link><br/>
    <Link to="/cost">Costs</Link><br/>
    <Link to="/initiative">Initiative</Link><br/>
    <Link to="/stories">Stories</Link><br/>

      <Switch>
        <Route exact path="/stories" >
          <Stories/>
        </Route>
        <Route exact path="/initiative">
          <Initiative/>
        </Route>
        <Route exact path="/cost">
          <Costs/>
        </Route>
        <Route path="/">
          <Events/>
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
