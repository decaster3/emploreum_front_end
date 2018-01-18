import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase'
import Web3 from 'web3'

var config = {
  apiKey: 'AIzaSyAoohB8XbCd3c4mTunaAN4lu87YHODr4q0',
  authDomain: 'emploreum.firebaseapp.com',
  databaseURL: 'https://emploreum.firebaseio.com',
  projectId: 'emploreum',
  storageBucket: 'emploreum.appspot.com',
  messagingSenderId: '99381427050'
}
firebase.initializeApp(config)

var contractInfo = require('./blockchain/JCR.json')
var contract = require('truffle-contract')
let Empl = contract(contractInfo)

window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
Empl.setProvider(window.web3.currentProvider)
console.log(window.web3.currentProvider)
window.contract = Empl.at('0xca0fbefaefa9c4614676ae2af2a54f620a5a2d44')
console.log(window.web3)

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

// NOTE: хот реплейсмент при появлении новых верхних элементов в дереве редаксa
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
