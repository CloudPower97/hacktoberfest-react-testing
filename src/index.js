import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import Layout from './hoc/Layout'
import EnzymeInDepth from './containers/EnzymeInDepth'

ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/intro" component={App} />
        <Route path="/enzyme-in-depth" component={EnzymeInDepth} />
        <Redirect to="/intro" />
      </Switch>
    </BrowserRouter>
  </Layout>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
