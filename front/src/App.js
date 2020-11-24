import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import { Helmet } from 'react-helmet'

import Portfolio from "./views/Portfolio/Portfolio"
import LandingPage from './views/LandingPage/LandingPage';
import Shop from './views/Shop/Shop';

import Nav from './views/Nav/Nav'
const TITLE = "KWON_theFACT0RY"

class App extends React.Component {

  render(){

    return (
    <BrowserRouter >
      <div className="wrapper">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Nav />
        <Fragment>
          <div class="contentContainer">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/shop" component={Shop} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Fragment>
      </div>
    </BrowserRouter>

  );
}
}


export default App;
