import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components';
import { QueryParamProvider } from 'use-query-params';
import { ThemeProvider } from 'styled-components'

import * as themes from './themes'
import { ModalPortal } from '../components/modals/ModalPortal'
import { SearchPage } from '../pages/SearchPage'

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    font-weight: 300;
  }

  h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.aColor};
  }
  a:hover {
    color: ${p => p.theme.aHoverColor};
    text-decoration: underline;
  }
`;

const App: React.FC = () => {
  return <ThemeProvider theme={themes.defaultTheme}>
    <AppContainer>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route exact path="/" default component={SearchPage} />
            <Redirect to="/" />
          </Switch>
        </QueryParamProvider>
      </Router>
      <ModalPortal/>
    </AppContainer>
  </ThemeProvider>
}

export default App
