//房产查询及购买页面JS文件
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

function getSupplier(){

//var estate = EstateSupplyChain.deployed();
var estate_id1 = document.getElementById("estate_id1").value;

//setStatus("Initiating transaction... (please wait)");
//console.log(estate_id1);
estate.getSupplier(estate_id1,function(error,value) {
  	
  	//console.log(value);
    if(!error){
    var span_element2 = document.getElementById("getval1");
	  //var str = web3.toAscii(value[1]);
	  var str = value[0].toNumber();
    span_element2.innerHTML = str;

	  var span_element3 = document.getElementById("getval2");
	  var str = web3.toAscii(value[1]);
    span_element3.innerHTML = str;	
 
	  var span_element4 = document.getElementById("getval3");
	  var str = web3.toAscii(value[2]);
	  span_element4.innerHTML = str;
    } else {
    	console.error(error);
    }
	
  });

}

function getSeller(){

//var eatate = EstateSupplyChain.deployed();
var estate_id1 = document.getElementById("estate_id1").value;

//setStatus("Initiating transaction... (please wait)");
//console.log(estate_id1);
estate.getSeller(estate_id1,function(error,value) {
    //console.log(value);	
    if(!error){
	  var cspan_element1 = document.getElementById("getval5");
    var cstr = web3.toAscii(value[0]);  
    cspan_element1.innerHTML = cstr;
 	
    var cspan_element2 = document.getElementById("getval6");
	  var cstr = web3.toAscii(value[1]);
    cspan_element2.innerHTML = cstr;

	  var cspan_element3 = document.getElementById("getval7");
	  var cstr = web3.toAscii(value[2]);
	  cspan_element3.innerHTML = cstr;   
	
	  var cspan_element4 = document.getElementById("getval8");
	  var cstr = value[3].toNumber();
	  cspan_element4.innerHTML = cstr; 
   } else {
        console.error(error);
   }
    
   }); 
}

function getCustomer(){

//var estate = EstateSupplyChain.deployed();
var estate_id1 = document.getElementById("estate_id1").value;

//setStatus("Initiating transaction... (please wait)");

estate.getCustomer(estate_id1,function(error,value) {
    //console.log(value);
    if(!error){
	   var sstr = value[0].toNumber();
	   var sspan_element1 = document.getElementById("getval10");
     sspan_element1.innerHTML = sstr;
 
	   var sstr = web3.toAscii(value[1]);
	   var sspan_element2 = document.getElementById("getval11");
     sspan_element2.innerHTML = sstr;

     var sstr = web3.toAscii(value[2]);
	   var sspan_element3 = document.getElementById("getval12");
     sspan_element3.innerHTML = sstr;
   } else {
   	   console.error(error);
   }
    
  });
}

function showBalance(){

	var balances = document.getElementById("balances");
	var account = web3.eth.accounts[0].valueOf();
	//console.log(account);
	web3.eth.getBalance(account,function(error,value){
		if(!error){
			console.log(value);
			balances.innerHTML = value.toNumber();
		} else {
			console.log(error);
		}
	});
	
}

function buyEstate(){
   //var buy = buyEstate.deployed();
	
  var estate_id1 = parseInt(document.getElementById("estate_id1").value);
  var price;
  //var price = parseInt(document.getElementById("getval8").value);
  //var receiver = parseInt(document.getElementById("estate_name").value);
  var receiver = '0xc869acedba3ea1ddfbcafaf357cd34e76dbc0ff4';
  //setStatus("Initiating transaction... (please wait)");

  estate.getSeller(estate_id1,function(error,value) {
    //console.log(value);
    if(!error){
	   price = value[3].c[0];
	  //console.log(estate_id1);
	buy.payMoney.sendTransaction(receiver,price,{from: web3.eth.accounts[0]},function(error,value){
  	if(!error){
  		 console.log(value);
  		 buy.transferOwnership(estate_id1,function(error,value){
  			if(!error){
          //setStatus("Transaction complete!");  
  				console.log(value);
  			} else {
  				console.log(error);
  			}
  		});
  	} else {
  		console.log(error);
  	}
  });
   } else {
   	   console.error(error);
   } 
 
  });
  //console.log(estate_id1);
    
}

/*function printBlock() {
  var txHash = web3.eth.getblock("latest").transactions[0];
  var tx = web3.eth.getTransaction(txHash);
  if(tx!=null){
    console.log(tx.hash);
  }
  web3.eth.getBlockNumber(function(error,value){
    if(!error){
      web3.eth.getblock(value,function(error,value1){
        if(!error){
          console.log(value1);
        }
      });
    }
  });
    
}*/

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}