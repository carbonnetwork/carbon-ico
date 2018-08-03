var SafeMathLib = artifacts.require("SafeMathLib");
var Ownable = artifacts.require("Ownable");
var ERC20 = artifacts.require("ERC20");
var StandardToken = artifacts.require("StandardToken");
var CarbonToken = artifacts.require("CarbonToken");
var CarbonTokenMock = artifacts.require("CarbonTokenMock"); 

module.exports = function(deployer) {
  deployer.deploy(SafeMathLib);
  //deployer.deploy(Ownable);
  //deployer.deploy(ERC20); //abstract contract or interface has no bytecode, don't need deploy.
  deployer.link(SafeMathLib, CarbonToken);
  //deployer.deploy(StandardToken);
  deployer.deploy(CarbonToken).then(function(){
  	//return deployer.deploy(CarbonTokenMock, CarbonToken.address);
  });
};