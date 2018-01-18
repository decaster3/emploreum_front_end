import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MetamaskCheckContainer from './modules/register/containers/MetamaskCheckContainer'
import Account from './modules/account/containers/Account'

const configureRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/metamask' component={MetamaskCheckContainer} />
        <Route exact path='/' component={Account} />
      </Switch>
    </div>
  )
}

export default configureRoutes
