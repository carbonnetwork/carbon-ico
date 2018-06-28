pragma solidity ^0.4.23;

/**
 * The Ownable contract does this and that...
 */
contract Ownable {
	address public owner;

	constructor () public {
		owner = msg.sender;
	}	

	modifier onlyOwner() public {
	    require(msg.sender == owner);
	    _;
	}
}
