//供应商信息填写页面js文件
if(typeof web3 !== 'undefined'){
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var connected = web3.isConnected();
if(!connected){
  console.log("node is not connected!");
} else {
  console.log("node is connected!");
}

//var Web3 = require("web3");
var estate_address = '0x68b5a782df9ed8208ab8942e16c2320f934bb23f';
var estate =  web3.eth.contract(estate_abi).at(estate_address);
//console.log(estate_abi);

function setSupplier(){

//var estate = EstateSupplyChain.deployed();
var estate_id = parseInt(document.getElementById("estate_id").value);
var raw_id = parseInt(document.getElementById("raw_id").value);
var supplier_name = document.getElementById("supplier_name").value;
var raw_name = document.getElementById("raw_name").value;
//var supplier_extrainfo = document.getElementById("supplier_extrainfo").value;
//console.log(estate_id);
//var raw_location = document.getElementById("raw_location")..value;value;
//var raw_quantity = parseInt(document.getElementById("raw_quantity").value);
//var raw_price = parseInt(document.getElementById("raw_price").value);
//var raw_otherdate = parseInt(document.getElementById("raw_otherdate").value);

setStatus("Initiating transaction... (please wait)");

estate.setSupplier(estate_id,raw_id,supplier_name,raw_name, {from: web3.eth.accounts[0],gas:400000},
	
	function(error,result){
	if(!error){
        console.log(JSON.stringify(result));
        setStatus("Transaction complete!");}
        //console.log(supplier_extrainfo);
    else{
        console.error(error);
        //console.log(estate_id);
        setStatus("Error setting value; see log.");}
    });
    
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}
