var EstateSupplyChain = artifacts.require("./EstateSupplyChain.sol");
var buyEstate = artifacts.require("./buyEstate.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
module.exports = function(deployer) {
	
  deployer.deploy(EstateSupplyChain);
  deployer.deploy(buyEstate);
  deployer.deploy(SafeMath);
};
