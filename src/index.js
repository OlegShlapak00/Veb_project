import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Collection from "./components/Colection/Colection";
import Visits from "./components/Visits/Visits";
import About from "./components/About/About";
import NavMenu from "./components/NavMenu/NavMenu";
import Antic from "./components/Colection/Antic/Antic";
import MiddleAge from "./components/Colection/MiddleAge/MiddleAge";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu/>
      <Route exact path="/" component={Main} />
      <Route path="/Collection" component={Collection} />
      <Route path="/Visits" component={Visits} />
      <Route path="/About" component={About} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
