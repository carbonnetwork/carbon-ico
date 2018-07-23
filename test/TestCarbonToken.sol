pragma solidity ^0.4.23;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CarbonToken.sol";


/**
 * The TestCarbonToken contract does this and that...
 */
contract TestCarbonToken {
	
	/*function testTransfer() public {
		address carbonAddress = DeployedAddresses.CarbonToken();
		CarbonToken carbon = CarbonToken(carbonAddress);

		address x = 0xdcA67974edD72857Cd36b08D8Df27D2a439661e9;
		bool flag = carbonAddress.call(bytes4(keccak256("transfer(address, uint256)")), x, 1000);
		if(!flag){
			revert();
		}

		Assert.equal(carbon.balanceOf(x), 1000, "The balance is wrong!");
	}*/
}
