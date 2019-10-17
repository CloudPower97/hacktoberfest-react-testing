import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'

export default ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/button`} component={ButtonComponent} />
    <Route path={`${path}/input`} component={InputComponent} />
    <Redirect to={`${path}/button`} />
  </Switch>
)
