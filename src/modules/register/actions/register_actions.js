var registerConstants = require('../../register/constants/register_constants.js')
var Web3 = require('web3')

// эту функуцию нужно вызывать всегда, прежде чем произовдятся манипуляции со смарт-контрактами
export function checkMetamaskOnLoad () {
  return function (dispatch) {
    dispatch({type: registerConstants.CHECK_METAMASK,
      metamaskStatus: {
        status: registerConstants.METAMASK_STATUS_LOADING,
        network: registerConstants.METAMASK_NETWORK_LOADING
      }
    })
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      window.web3.eth.net.getNetworkType((err, netId) => {
        window.web3.eth.getAccounts((errr, acc) => {
          dispatch({type: registerConstants.CHECK_METAMASK,
            metamaskStatus: {
              status: true,
              network: netId,
              address: acc[0]
            }
          })
          if (errr) {
            console.log(err)
          }
        })
        if (err) {
          console.log(err)
        }
      })
    } else {
      window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
      dispatch({type: registerConstants.CHECK_METAMASK,
        metamaskStatus: {
          status: false,
          network: false
        }
      })
    }
  }
}
export function register (props) {
  return function (dispatch, getState) {
    console.log(props)
    console.log(getState().user.metamaskStatus.address)
  }
}

export function setRole (role) {
  return function (dispatch) {
    dispatch({type: registerConstants.SET_USER_ROLE, role: role})
  }
}
