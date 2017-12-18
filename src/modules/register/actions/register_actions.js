var registerConstants = require('../../register/constants/register_constants.js')
var Web3 = require('web3')

// эту функуцию нужно вызывать всегда, прежде чем произовдятся манипуляции со смарт-контрактами
export function checkMetamask () {
  return function (dispatch) {
    dispatch({type: registerConstants.CHECK_METAMASK, metamask_status: registerConstants.METAMASK_STATUS_LOADING})
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(web3.currentProvider)
      dispatch({type: registerConstants.CHECK_METAMASK, metamask_status: true})
    } else {
      window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
      dispatch({type: registerConstants.CHECK_METAMASK, metamask_status: false})
    }
  }
}
