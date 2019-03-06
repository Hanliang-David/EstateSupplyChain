//主要用于主页钱包地址处是否连接的判断
//var Web3 = require("web3");
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

//var estate_abi = $.getJSON('EstateSupplychian.json');
//var estate_address = '0xbe8a613d1b407f930824fb5c6c64dd5566409c7e';
//var estate = new web3.eth.Contract(estate_abi,estate_address);
//var buy_abi = $.getJSON('buyEstate.json');
//var buy_address = '0xa567200eb0fbd591441852afa6b3df0b72777b06';
//var buy = new web3.eth.Contract(buy_abi,buy_address);

var accounts;
var account;

/*function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}

function setSupplier(){

//var estate = EstateSupplyChain.deployed();
var estate_id = document.getElementById("estate_id").value;
var raw_id = document.getElementById("raw_id").value;
var supplier_name = document.getElementById("supplier_name").value;
var raw_name = document.getElementById("raw_name").value;
//var raw_location = document.getElementById("raw_location").value;
//var raw_quantity = parseInt(document.getElementById("raw_quantity").value);
//var raw_price = parseInt(document.getElementById("raw_price").value);
//var raw_otherdate = parseInt(document.getElementById("raw_otherdate").value);

setStatus("Initiating transaction... (please wait)");

estate.methods.setSupplier(estate_id,raw_id,supplier_name,raw_name, {from: account,gas:400000}).then(function() {
    
  setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });
  
  setTimeout(function(){
		
			refresh();
						  
		}, 8000);
    
}
function setSeller(){

//var estate = EstateSupplyChain.deployed();
var estate_id = document.getElementById("estate_id").value;
var seller_name = document.getElementById("seller_name").value;
var estate_name = document.getElementById("estate_name").value;
var estate_location = document.getElementById("estate_location").value;
//var estate_quantity = document.getElementById("estate_quantity").value;
var estate_sellprice = parseInt(document.getElementById("estate_sellprice").value);
//var estate_selltime = parseInt(document.getElementById("estate_selltime").value);
//var estate_otherdate = parseInt(document.getElementById("estate_otherdate").value);
//var isdeal = parseInt(document.getElementById("isdeal").value);

setStatus("Initiating transaction... (please wait)");

estate.methods.setSeller(estate_id,seller_name,estate_name,estate_location,estate_sellprice, {from: account,gas:400000}).then(function() {
    
  setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });
  
   
  setTimeout(function(){
    
      refresh();
              
    }, 8000);
  
   
}
function setCustomer(){

//var estate = EstateSupplyChain.deployed();
var estate_id = document.getElementById("estate_id").value;
var customer_id = document.getElementById("customer_iphone").value;
var customer_name = document.getElementById("customer_name").value;
var customer_address = document.getElementById("customer_address").value;
//var customer_dealprice = document.getElementById("customer_dealprice").value;
//var customer_otherdate = document.getElementById("customer_otherdate").value;

setStatus("Initiating transaction... (please wait)");

estate.methods.setCustomer(estate_id,customer_iphone,customer_name,customer_address, {from: account,gas:400000}).then(function() {
    
  setStatus("Transaction complete!");
  
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });
  
  
  setTimeout(function(){
    
      refresh();
              
    }, 8000);
  
  
}

function refresh(){

	//var buy = buyEstate.deployed();
	var balance_element = document.getElementById("balance");
  
   buy.methods.getBalance(parseInt(account), {from: account,gas:400000}).call().then(function(value) {
    
    balance_element.innerHTML = value;
    console.log("Balance Updated!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });	
	
}*/

/*function showBalance(){
  var buy = buyEstate.deployed();

  buy.getBalance.call(account).then(function(result){
    console.log(result);
  }).catch(function(error){
    console.log(error.message);
  });
}*/

/*function markBuy(){
  buy.methods.Customers().call().then(function(customers){
    for (i = 0; i <= customers.length; i++){
      if(customers[i] !== '0x0000000000000000000000000000000000000000'){
        $('#id').eq(i).find('button').text('Success').attr('disabled',true);
      }
    }
  }).catch(function(err){
    console.log(err.message);
  });
}*/
/*
function buyEstate(){
	//var buy = buyEstate.deployed();
	
  var estate_id4 = parseInt(document.getElementById("estate_id4").value);
	var price = parseInt(document.getElementById("estate_sellprice4").value);
	var receiver = parseInt(document.getElementById("estate_name").value);
	
  console.log("Initiating transaction... (please wait)");
  buy.methods.payMoney(receiver, price,{from: account,gas:700000}).then(fuction(result){
    
    console.log(result);
    console.log("Transaction complete!");
    return markBuy();
   //if(estate_id4 != 0x0) alert("payMony!");
    //else alert("Failure!");
  }).catch(function(e) {
    console.log(e);
    
  });

	setTimeout(function(){
		
			refresh();
						  
		}, 8000);
}
*/
/*function ownerShip(estate_id){
   var estate_id4 = parseInt(document.getElementById("estate_id4").value);

   buy.methods.transferOwnership(estate_id4, {from: account}).then(function(result){
     console.log(result);
   }).catch(function(e){
    console.log(e);
   });
}

function showEstateCount(){
  //var buy = buyEstate.deployed();

  buy.methods.showCustomerEstatecount(parseInt(account)).call().then(function(result){
    var count = document.getElementById("count1");
    count.innerHTML = result;
  }).catch(function(e){
    console.log(e);
  });

}*/

/*function showEstateDetail(){
  //var buy = buyEstate.deployed();
  
    for (var estate_id = 1; eatete_id <= 8; estate_id++){
      if(estateToOwner[estate_id] == account){
        buy.methods.getEstateDetail(estate_id).call().then(fuction(value){

          var a1 = document.getElementById("getval2");
          var str = web3.toAscii(value[1]);
          a1.innerHTML = str;

          var a2 = document.getElementById("getval3");
          var str = web3.toAscii(value[2]);
          a2.innerHTML = str;  
 
          var str = web3.toAscii(value[3]);
          var a3 = document.getElementById("getval4");
          a3.innerHTML = str;
        });
        
      }
    }
  
}*/

/*function getRawmaterial(){

//var estate = EstateSupplyChain.deployed();

var estate_id1 = document.getElementById("estate_id1").value;

setStatus("Initiating transaction... (please wait)");

estate.methods.getSuppiler(estate_id1, {from: account}).call().then(function(value) {
  	
    
  var span_element2 = document.getElementById("getval1");
	var str = web3.toAscii(value[1]);
    span_element2.innerHTML = str;

	var span_element3 = document.getElementById("getval2");
	var str = web3.toAscii(value[2]);
    span_element3.innerHTML = str;	
 
	var str = web3.toAscii(value[3]);
	var span_element4 = document.getElementById("getval3");
	span_element4.innerHTML = str;

	

 setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
}*/

/*function setQ(){

var metaset = StructStorage.deployed();

var lotno = document.getElementById("lotno").value;
var grade = document.getElementById("grade").value;
var mrp = parseInt(document.getElementById("mrp").value);
var testdate = document.getElementById("testdate").value;
var expdate = document.getElementById("expdate").value;


setStatus("Initiating transaction... (please wait)");

metaset.quality( lotno,grade,mrp,testdate,expdate, {from: account,gas:400000}).then(function() {
  setStatus("Transaction complete!");
	
  $("#sign-up-form").hide();
  $("#log-in-form").hide();
  $("#payments-form").show();
  $("#approve-form").hide();
  
  $("#sign-up-btn").removeClass("active");
  $("#log-in-btn").removeClass("active");
  $("#payments-btn").addClass("active");
  $("#Approve-btn").removeClass("active");
	
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });

 
  
};*/

/*function getCustomer(){

//var estate = EstateSupplyChain.deployed();
var estate_id2 = document.getElementById("estate_id2").value;

setStatus("Initiating transaction... (please wait)");

estate.methods.getCustomer(estate_id,{from: account}).call().then(function(value) {
    
	var str = web3.toAscii(value[0]);
	var cspan_element1 = document.getElementById("getval10");
    cspan_element1.innerHTML = str;
 
	var str = web3.toAscii(value[1]);
	var cspan_element1 = document.getElementById("getval11");
    cspan_element1.innerHTML = str;

	var cspan_element1 = document.getElementById("getval12");
    cspan_element1.innerHTML = value[2].valueOf();



   setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
};


function getSeller(){

//var eatate = EstateSupplyChain.deployed();
var estate_id3 = document.getElementById("estate_id3").value;

setStatus("Initiating transaction... (please wait)");


estate.methods.getSeller(estate_id,{from: account}).call().then(function(value) {
    	
	var cspan_element1 = document.getElementById("getval5");
  var cstr = web3.toAscii(value[0]);  
    cspan_element1.innerHTML = cstr;
 	
  var cspan_element2 = document.getElementById("getval6");
	var cstr = web3.toAscii(value[1]);
    cspan_element2.innerHTML = cstr;

	var cspan_element3 = document.getElementById("getval7");
	var cstr = web3.toAscii(value[2]);
	cspan_element3.innerHTML = cstr;
     
	
	var cspan_element5 = document.getElementById("getval8");
  var cstr = web3.fromWei(value[3],'ether');
	cspan_element5.innerHTML = cstr;

	
   
   setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
}

function printTransaction(txHash) {
	
  var txHash = web3.eth.getBlock("latest").transactions[0];
  var tx = web3.eth.getTransaction(txHash);
  
  if (tx != null) {
    console.log("  tx hash          : " + tx.hash + "\n"
      + "   nonce           : " + tx.nonce + "\n"
      + "   blockHash       : " + tx.blockHash + "\n"
      + "   blockNumber     : " + tx.blockNumber + "\n"
      + "   transactionIndex: " + tx.transactionIndex + "\n"
      + "   from            : " + tx.from + "\n" 
      + "   to              : " + tx.to + "\n"
      + "   value           : " + tx.value + "\n"
      + "   gasPrice        : " + tx.gasPrice + "\n"
      + "   gas             : " + tx.gas + "\n"
      + "   input           : " + tx.input);
  
  }
}

function printBlock() {
	
  var block = web3.eth.blockNumber;
  console.log("Block number     : " + web3.eth.blockNumber + "\n"
    + " hash            : " + web3.eth.getBlock(block).hash + "\n"
    + " parentHash      : " + web3.eth.getBlock(block).parentHash + "\n"
    + " nonce           : " + web3.eth.getBlock(block).nonce + "\n"
    + " sha3Uncles      : " + web3.eth.getBlock(block).sha3Uncles + "\n"
    + " logsBloom       : " + web3.eth.getBlock(block).logsBloom + "\n"
    + " transactionsRoot: " + web3.eth.getBlock(block).transactionsRoot + "\n"
    + " stateRoot       : " + web3.eth.getBlock(block).stateRoot + "\n"
    + " miner           : " + web3.eth.getBlock(block).miner + "\n"
    + " difficulty      : " + web3.eth.getBlock(block).difficulty + "\n"
    + " totalDifficulty : " + web3.eth.getBlock(block).totalDifficulty + "\n"
    + " extraData       : " + web3.eth.getBlock(block).extraData + "\n"
    + " size            : " + web3.eth.getBlock(block).size + "\n"
    + " gasLimit        : " + web3.eth.getBlock(block).gasLimit + "\n"
    + " gasUsed         : " + web3.eth.getBlock(block).gasUsed + "\n"
    + " timestamp       : " + web3.eth.getBlock(block).timestamp + "\n"
    + " transactions    : " + web3.eth.getBlock(block).transactions + "\n"
    + " uncles          : " + web3.eth.getBlock(block).uncles);
    if (web3.eth.getBlock(block).transactions != null) {
      console.log("--- transactions ---");
      web3.eth.getBlock(block).transactions.forEach( function(e) {
        printTransaction(e);
      })
    }
	
	var blocknum = document.getElementById("blocknum");
  blocknum.innerHTML = block.valueOf();
};*/


window.onload = function() {

  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
	  
	 var from_address = document.getElementById("account_address");
    from_address.innerHTML = web3.eth.accounts[0].valueOf(); 

  });
}
