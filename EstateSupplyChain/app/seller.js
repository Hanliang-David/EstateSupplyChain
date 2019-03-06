//房产商信息填写页面js文件
//var Web3 = require("web3");
var estate_address = '0x68b5a782df9ed8208ab8942e16c2320f934bb23f';
var estate = web3.eth.contract(estate_abi).at(estate_address);

function setSeller(){

//var estate = EstateSupplyChain.deployed();
var estate_id = parseInt(document.getElementById("estate_id").value);
var seller_name = document.getElementById("seller_name").value;
var estate_name = document.getElementById("estate_name").value;
var estate_location = document.getElementById("estate_location").value;
//var estate_quantity = document.getElementById("estate_quantity").value;
var estate_sellprice = document.getElementById("estate_sellprice").value;
//var estate_selltime = parseInt(document.getElementById("estate_selltime").value);
//var estate_otherdate = parseInt(document.getElementById("estate_otherdate").value);
//var isdeal = parseInt(document.getElementById("isdeal").value);

setStatus("Initiating transaction... (please wait)");
//console.log(estate_id);
//console.log(seller_name);
estate.setSeller(estate_id,seller_name,estate_name,estate_location,estate_sellprice, {from: web3.eth.accounts[0],gas:400000},
   function(error,result){
	if(!error){
		//console.log(result);
		//console.log(seller_name);
        console.log(JSON.stringify(result));
    	setStatus("Transaction complete!");}
    else{
        console.error(error);
        setStatus("Error setting value; see log.");}

	});
    
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}