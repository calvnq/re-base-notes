import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './config/routes'

// Here we're rendering the router with history
ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>, 
  document.querySelector('.app')
);