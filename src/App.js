import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/navBar";
import HomePage from "./components/homePage";
import PastPapers from "./components/pastPapers";
import ShortNotes from "./components/shortNotes";

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
              <Route path='/pastpapers' component={PastPapers}/>
              <Route path='/shortnotes' component={ShortNotes}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
