var CarbonToken = artifacts.require("CarbonToken");

const Web3 = require('web3');
var web3 = new Web3();

var carbonAddress = '0x808e5ccf00d12e7f13c845da0fb7dd0b8855646a';

contract('CarbonToken', function(accounts) {

  it("should put 1 CarbonToken in the fifth account", function() {
    
    var carbon;
    
    return CarbonToken.at(carbonAddress).
    then(cb => {
      carbon = cb;
      carbon.transfer(accounts[1], 20 * 10**15);
    }).
    then(function(){ return carbon.balanceOf.call(accounts[1]);}).
    then(balance => {
      console.log("the account has " + balance.valueOf() + " token(s)");
      assert.equal(balance.valueOf(), 20 * 10**15, "1 wasn't in the account");
    }).
    catch(err => {
      console.log("error: " + err);
    });
  });

});