pragma solidity ^0.4.19;

import "./SafeMath.sol";
import "./EstateSupplyChain.sol";

/**
 * The buyEstate contract does this and that...
 */
 //房产购买合约，包括付款和所有权转移，统计顾客房产数量并显示相应ID,收款地址可硬编码为合约地址
contract buyEstate is EstateSupplyChain {
	using SafeMath for uint;

	//address[] public customers;
	//uint[] public id;
	mapping (uint => address) public estateToOwner;
    mapping (address => uint) ownerEstateCount;
    mapping (address => uint) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    modifier isSell (uint estate_id){

		require (estateToOwner[estate_id] != address(0));
		_;
		
	}
	modifier exitEstate(uint estate_id) { 

        EstateSupply storage estate_real = estatesupply1[estate_id];
		require (estate_real.estate_id != 0x0); 
		_; 
	}

    function getbalance (address addr) returns(uint) {
		return balances[addr];		
	}

	function transferOwnership (uint estate_id) public {
		//require(estate_id>=0 && estate_id<=8);
		//customers[estate_id] = msg.sender;
		estateToOwner[estate_id] = msg.sender;
		ownerEstateCount[msg.sender] = ownerEstateCount[msg.sender].add(1); 	
		//return estate_id;	
	}

	function showCustomerEstateId (address customer_address) constant returns(uint[]) {
		uint[] memory result = new uint[](ownerEstateCount[customer_address]);
		uint counter = 0;
		for(uint i = 1; i <= 99; i++){
			if(estateToOwner[i] == customer_address){
				result[counter] = i;
				counter++;
			} 
		}
		return result;

	} 

	function showCustomerEstatecount(address customer_address) constant returns(uint){
		return ownerEstateCount[customer_address];
	}

	/* function getCustomers() public view returns(address[]) {	
		return customers;
	} */
	
	/* function getEstateDetail (uint estate_id) constant returns(bytes32, bytes32, bytes32) {
		returns( estatesupply[estate_id].estate_name,
				 estatesupply[estate_id].estate_location,
				 estatesupply[estate_id].customer_dealprice
				 );
	} */		
	//exitEstate(estate_id) isSell(estate_id)	
	function payMoney (address receiver,uint price)  returns(bool) {
         
         if (balances[msg.sender] < price)
         return false;
         balances[msg.sender] -= price;
         balances[receiver] += price;
         //Transfer(msg.sender,receiver,price);
         return true;     
		
	}

	
}

