import React from 'react'
import ReactDOM from 'react-dom'
import Root from './scenes/Root'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase'
import { checkMetamask } from './modules/register/actions/register_actions'
var config = {
  apiKey: 'AIzaSyAoohB8XbCd3c4mTunaAN4lu87YHODr4q0',
  authDomain: 'emploreum.firebaseapp.com',
  databaseURL: 'https://emploreum.firebaseio.com',
  projectId: 'emploreum',
  storageBucket: 'emploreum.appspot.com',
  messagingSenderId: '99381427050'
}

firebase.initializeApp(config)

const store = configureStore()

setTimeout(function () {
  store.dispatch(checkMetamask())
})

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

// NOTE: хот реплейсмент при появлении новых верхних элементов в дереве редаксa
if (module.hot) {
  module.hot.accept('./scenes/Root', () => {
    const NewRoot = require('./scenes/Root').default
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
