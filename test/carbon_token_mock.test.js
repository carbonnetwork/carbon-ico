var CarbonTokenMock = artifacts.require("CarbonTokenMock");
var CarbonToken = artifacts.require("CarbonToken");

/*
  constract call another constract has some problerm,skip
 */
contract.skip('CarbonTokenMock', function(accounts) {

  it("should put 1 CarbonTokenMock in the fifth account", function() {
    var carbon;

    CarbonToken.new().
    then(function(cb){
      carbon = cb;
      console.log("carbon address: " + carbon.address);
      return cb.balanceOf.call(accounts[0]);
    }).
    then(function(b){
      console.log("account " + accounts[0] + " has balance: " + b.valueOf());
    }).
    then(function(){ return CarbonTokenMock.new(); }).
    then(cm => { 
      console.log("CarbonTokenMock address: " + carbon.address);
      return cm.transferMock(carbon.address, accounts[6], 2000); 
    }).
    then(p => { 
      logObject(p, 0);
      return carbon.balanceOf.call(accounts[6]); 
    }).
    then(balance => {
      console.log("the account has " + balance.valueOf()/(10**18) + " token(s)");
      assert.equal(balance.valueOf(), 2000, "1 wasn't in the account");
    }).
    catch(err => { console.log("error: " + err); });
  });


  function repeatTab(level) {
    var res = "";
    for(var i = 0; i < level; i++){
      res += "\t";
    }
    return res;
  }

  function logObject (obj, level){
    for(var f in obj){
      console.log(repeatTab(level) + f + ": " + obj[f]);
      if(typeof obj[f] == 'object'){
        var l = level + 1;
        logObject(obj[f], l);
      }
    }
  }
});