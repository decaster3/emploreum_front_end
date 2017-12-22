var Migrations = artifacts.require("./EmploreumMain.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
