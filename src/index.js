import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase'
import { checkMetamaskOnLoad } from './modules/register/actions/register_actions'
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

var contractInfo = require('./blockchain/build/contracts/EmploymentContract.json')
var contract = require('truffle-contract')
let Empl = contract(contractInfo)

if (typeof web3 !== 'undefined') {
  console.log('Metamask initialized123')
  window.web3 = new Web3(web3.currentProvider)
  Empl.setProvider(web3.currentProvider)
  window.employeeAuthContract = Empl.at('0xCc6d207911c3dba934c75D472CEAFC36d8F9A27d')
} else {
  console.log('Metamask not initialized. Falling back to localhost:8545')
  // window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}



// window.currentUser = undefined
// window.authorized = false
// window.user_type = 0// 0 - employee, 1 - company

// window.fetchData = function (callback) {
//   setTimeout(function () {
//     console.log('Metamask address: ', window.web3.eth.accounts[0])
//     window.emp.employee_list(window.web3.eth.accounts[0]).then(function (data) {
//       if (data[1] === '') {
//         callback()
//       } else {
//         window.currentUser = {
//           address: data[0],
//           name: data[1] + ' ' + data[2],
//           user_type: 0
//         }
//         window.authorized = true
//         console.log(window.currentUser)
//         callback()
//       }
//     })
//   }, 300)
// }

const store = configureStore()

window.addEventListener('load', function () {
  store.dispatch(checkMetamaskOnLoad())
})

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
