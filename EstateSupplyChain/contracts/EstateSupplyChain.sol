pragma solidity ^0.4.19;

/**
 * The EStateSupplyChain contract does this and that...
 */
 //上链信息存储查询合约
contract EstateSupplyChain {
 /* enum Actor { Supplier, Seller, Customer }
	
	struct User {
		uint Id;
		bytes32 name;
		Actor actor;	
	} */
	
	struct EstateSupply {
		uint estate_id;
        
		uint raw_material_id;
		bytes32 suppiler_name;
        bytes32 raw_material_name;
        //bytes32 raw_material_location;
        //bytes32 raw_material_quantity;
        //bytes32 raw_material_price;
        //bytes32 raw_material_otherdate;
        
        //bytes estate_batch;
        bytes32 seller_name;
        bytes32 estate_name;
        bytes32 estate_location;
        uint estate_sellprice;
        //bytes32 estate_quantity;
        //bytes32 estate_selltime;
        //bytes32 estate_otherdate;
        //bool isdeal;

        uint customer_iphone;
        bytes32 customer_name;
        bytes32 customer_address;
        //bytes32 customer_dealprice;
        //bytes32 customer_otherdate;
		
	}

	//EstateSupply[] public estatesupply;
	mapping (uint => EstateSupply) estatesupply1;
	/* mapping (address => User) supplierMap;
	mapping (address => User) sellerMap;
	mapping (address => User) customerMap; */
	
    //event createSupplier(uint estate_id);
    //event createSeller(uint estate_id);
    //event createCustomer(uint estate_id);
   /*  function EstateSupplyChain () {
    	owner = msg.sender;
    }
    function createUser (uint Id, bytes32 name,Actor actor) returns(bool, string) {
    	User user;
    	if(actor == Actor.Supplier){
    		user = supplierMap[msg.sender];
    	}else if(actor == Actor.Seller){
    		user = sellerMap[msg.sender];
    	}else if(actor == Actor.Customer){
    		user = customerMap[msg.sender];
    	}else{
    		return (false,"the actor is not exit");
    	}

    	if(user.Id == 0x0){
    		return(false,"this Id is exit");
    	}
    	user.Id = Id;
    	user.name = name;
    	user.actor = actor;
    	return(true,"The actor create successfuly!");
    	
    }  */
     
	function setSupplier (uint estate_id,uint raw_material_id,bytes32 suppiler_name,
		bytes32 raw_material_name) {
		/* User user = supplierMap[msg.sender];
		require(user.actor == Actor.Supplier); */
		EstateSupply storage estate_real = estatesupply1[estate_id];

		estate_real.estate_id = estate_id;
		estate_real.raw_material_id = raw_material_id;
		estate_real.suppiler_name = suppiler_name;
		estate_real.raw_material_name = raw_material_name;
		
		/* estatesupply[estate_id].estate_id = estate_id;
		estatesupply[estate_id].raw_material_id = raw_material_id;
		estatesupply[estate_id].suppiler_name = suppiler_name;
		estatesupply[estate_id].raw_material_name = raw_material_name; */
		//estatesupply[estate_id].raw_material_location = raw_material_location;
		//estatesupply[estate_id].raw_material_quantity = raw_material_quantity;
		//estatesupply[estate_id].raw_material_price = raw_material_price;
		//estatesupply[estate_id].raw_material_otherdate = raw_material_otherdate;
		//createSupplier(estate_id);
		
	}

	function getSupplier (uint estate_id) constant returns(uint, bytes32, bytes32) {
		
		EstateSupply storage estate_real = estatesupply1[estate_id];

		return (estate_real.raw_material_id,
		        estate_real.suppiler_name,
		        estate_real.raw_material_name
		        //estatesupply[estate_id].raw_material_location,
		        //estatesupply[estate_id].raw_material_quantity,
		        //estatesupply[estate_id].raw_material_price
		       // estatesupply[estate_id].raw_material_otherdate
			);
		
	}

	function setSeller (uint estate_id,bytes32 seller_name,bytes32 estate_name,bytes32 estate_location,
		uint estate_sellprice) {
		/* User user = sellerMap[msg.sender];
		require(user.actor == Actor.Seller); */
		EstateSupply storage estate_real = estatesupply1[estate_id];

		estate_real.seller_name = seller_name;
		estate_real.estate_name = estate_name;
		estate_real.estate_location = estate_location;
		//estatesupply[estate_id].estate_quantity = estate_quantity;
		estate_real.estate_sellprice = estate_sellprice;
		//estatesupply[estate_id].estate_selltime = estate_selltime;
		//estatesupply[estate_id].estate_otherdate = estate_otherdate;
	    //estatesupply[estate_id].isdeal = isdeal;
        //createSeller(estate_id);
		
	}

	function getSeller (uint estate_id) constant returns(bytes32, bytes32, bytes32, uint) {
		
		EstateSupply storage estate_real = estatesupply1[estate_id];

		return(estate_real.seller_name,
		       estate_real.estate_name,
		       estate_real.estate_location,
		       //estatesupply[estate_id].estate_quantity,
		       estate_real.estate_sellprice
		       //estatesupply[estate_id].estate_selltime,
		       //estatesupply[estate_id].estate_otherdate,
		       //estatesupply[estate_id].isdeal
			);
	}

	function setCustomer (uint estate_id,uint customer_iphone,bytes32 customer_name,bytes32 customer_address) {
		/* User user = customerMap[msg.sender];
		require(user.actor == Actor.Customer); */
		//estatesupply[estate_id].estate_id = estate_id;
		EstateSupply storage estate_real = estatesupply1[estate_id];

		estate_real.customer_iphone = customer_iphone;
		estate_real.customer_name = customer_name;
		estate_real.customer_address = customer_address;
		//estatesupply[estate_id].customer_dealprice = customer_dealprice;
		//estatesupply[estate_id].customer_otherdate = customer_otherdate;
		//createCustomer(estate_id);
			
	}

	function getCustomer (uint estate_id) constant returns(uint, bytes32, bytes32) {
		
		EstateSupply storage estate_real = estatesupply1[estate_id];
		return(estate_real.customer_iphone,
		       estate_real.customer_name,
		       estate_real.customer_address
		       //estatesupply[estate_id].customer_dealprice
		       //estatesupply[estate_id].customer_otherdate
			);
	}	
}



