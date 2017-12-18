var registerConstants = require('../../register/constants/register_constants.js')
let initialState = require('./user_initial_state.js')

module.exports = function (currentstate = initialState, action) {
  switch (action.type) {
    case registerConstants.CHECK_METAMASK:
      return {
        ...currentstate,
        metamask_status: action.metamask_status
      }
    default: return currentstate
  }
}
