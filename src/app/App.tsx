import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params';

import { SearchPage } from '../pages/SearchPage'

import './App.css'

const App: React.FC = () => {
  return <div className="App">
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path="/" default component={SearchPage} />
          <Redirect to="/" />
        </Switch>
      </QueryParamProvider>
    </Router>
  </div>
}

export default App