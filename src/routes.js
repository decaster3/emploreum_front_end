import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MetamaskCheckContainer from './modules/register/containers/MetamaskCheckContainer'

const configureRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MetamaskCheckContainer} />
      </Switch>
    </div>
  )
}

export default configureRoutes
