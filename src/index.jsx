import React from 'react';
import ReactDom from 'react-dom';
import { routes } from './routes.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDom.render(
  <BrowserRouter>
    <Switch>
      {routes.map((route, idx) => <Route key={idx} {...route}/>)}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)