import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {Link} from 'react-router'
import SearchGithub from './SearchGithub';

export const Main = ({children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 35}}>
          <SearchGithub />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
}