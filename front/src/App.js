import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"

import Portfolio from "./views/Portfolio/Portfolio"
import LandingPage from './views/LandingPage/LandingPage';
import Contact from './views/Contact/Contact';
import Shop from './views/Shop/Shop';

import Nav from './views/Nav/Nav'

class App extends React.Component {

  
  render(){
    return (
    <BrowserRouter >
      <div className="wrapper">
        <Nav />
        <Fragment>
          <div class="contentContainer">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/shop" component={Shop} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Fragment>
      </div>
    </BrowserRouter>    
    
  );
}
}


export default App;
