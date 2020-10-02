import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"

import Portfolio from "./views/Portfolio/Portfolio"
import LandingPage from './views/LandingPage/LandingPage';
import Contact from './views/Contact/Contact';
import Shop from './views/Shop/Shop';

import Nav from './views/Nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Fragment>
    </BrowserRouter>    
    
  );
}


export default App;
