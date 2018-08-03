pragma solidity ^0.4.23;
/**
 * 
 */

import "./StandardToken.sol";

import "./SafeMathLib.sol";

import "./Ownable.sol";


contract CarbonToken is StandardToken, Ownable {

	using SafeMathLib for uint256;

	string public constant name = "CarbonToken";
    string public constant symbol = "CBT";
    uint8 public constant decimals = 18;  

	constructor() public {
		_totalSupply = 1000000 * 10**uint256(decimals);
        balances[owner] = _totalSupply;
        emit Transfer(address(0), owner, _totalSupply);
	}

	function totalSupply() public constant returns (uint256 total){
		return _totalSupply.sub(balanceOf(address(0)));
	}


	function recharge (address _to, uint256 _value) external checkAddressSize(2 * 32) returns (bool success) {
		balances[tx.origin] = balances[tx.origin].sub(_value);
	    balances[_to] = balances[_to].add(_value);

	    emit Transfer(tx.origin, _to, _value);
	    return true;
	}

}
