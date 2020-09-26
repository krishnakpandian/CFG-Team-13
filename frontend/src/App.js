import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Initiative from './Components/Initiative/Initiative';
import Costs from './Components/Costs/Costs';
import Stories from './Components/Stories/Stories';
import Events from './Components/Events/Events';
import LargeEvent from './Components/LargeEvent/LargeEvent';
import Fade from 'react-reveal/Fade'
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <body>
      <Switch>
        <Route exact path="/comment/:id" >
          <LargeEvent/>
        </Route>
        <Route exact path="/stories" >
        <Fade>
          <Stories/>
        </Fade>
        </Route>
        <Route exact path="/initiative">
        <Fade down delay={300} distance={"0.5em"}>
          <Events>
          </Events>
        </Fade>
        </Route>
        <Route exact path="/cost">
          <Costs/>
        </Route>
        <Route path="/">
        <Fade down delay={300} distance={"0.5em"}>
          <Body/>
        </Fade>
        </Route>
      </Switch>
      </body>
    </Router>
    <Footer/>

    </div>
  );
}

export default App;