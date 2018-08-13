var SafeMathLib = artifacts.require("SafeMathLib");
var CarbonToken = artifacts.require("CarbonToken");

module.exports = function(deployer) {
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, CarbonToken);
  deployer.deploy(CarbonToken);
};