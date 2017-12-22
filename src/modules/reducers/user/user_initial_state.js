var registerConstants = require('../../register/constants/register_constants.js')

module.exports = {
  role: registerConstants.NONE,
  metamaskStatus: {
    status: registerConstants.METAMASK_STATUS_NOT_LOADED,
    network: registerConstants.METAMASK_NETWORK_NOT_LOADED
  },
  firstName: '',
  lastName: '',
  passport: '',
  status: registerConstants.NOT_LOGGED_IN
}
