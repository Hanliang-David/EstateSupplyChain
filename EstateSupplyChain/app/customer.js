//顾客信息填写页面JS文件
//var Web3 = require("web3");
var estate_address = '0x68b5a782df9ed8208ab8942e16c2320f934bb23f';
var estate =  web3.eth.contract(estate_abi).at(estate_address);

function setCustomer(){

//var estate = EstateSupplyChain.deployed();
var estate_id = parseInt(document.getElementById("estate_id").value);
var customer_iphone = parseInt(document.getElementById("customer_iphone").value);
var customer_name = document.getElementById("customer_name").value;
var customer_address = document.getElementById("customer_address").value;
//var customer_dealprice = document.getElementById("customer_dealprice").value;
//var customer_otherdate = document.getElementById("customer_otherdate").value;

setStatus("Initiating transaction... (please wait)");

estate.setCustomer(estate_id,customer_iphone,customer_name,customer_address, {from: web3.eth.accounts[0],gas:400000},
    function(error,result){
	if(!error){
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