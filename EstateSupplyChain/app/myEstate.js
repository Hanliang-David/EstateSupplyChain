//个人中心页面JS文件
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
var estate = web3.eth.contract(estate_abi).at(estate_address);

var buy_address = '0xc98ceac086e37e34fa293db2f9b084cbb37a0bef';
var buy = web3.eth.contract(buy_abi).at(buy_address);

function showMyEstateCount(){

	var account = web3.eth.accounts[0].valueOf();
	//console.log(account);
	buy.showCustomerEstatecount.call(account,function(error,value){
		if(!error){
			//console.log(value);
			var count = document.getElementById("estateCount");
			var estatecount = value;
			count.innerHTML = estatecount;
		}
	});
}

function showEstateDetails(){

	var account = web3.eth.accounts[0].valueOf();
	buy.showCustomerEstateId.call(account,function(error,value){
		if(!error){
			//console.log(value);
			for(var id in value){
			//console.log(value);
			var estateid = document.getElementById("estateId");
			var esid = value[0].c[0];
			estateid.innerHTML = esid;

			estate.getSeller(esid,function(error,value){
				if(!error){
				console.log(value);
				var estateLocation = document.getElementById("estateLocation");
			    var location= web3.toAscii(value[2]);
			    estateLocation.innerHTML = location;	
			} else {
				console.log(error);
			}
			});
		}
		} else {
			console.log(error);
		}
	});
}

