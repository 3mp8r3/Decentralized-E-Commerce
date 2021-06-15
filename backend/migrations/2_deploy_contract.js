var Supplier = artifacts.require("./Supplier.sol");
var Customer = artifacts.require("./Customer.sol");

module.exports = function(deployer) {

    /* IN TEST NETWORK, AMOUNT OF GAS IS AT DEVELOPER'S DISCRETION */
    deployer.deploy(Supplier, {gas: 1000000}).then(function(){
      console.log('********* Supplier is deployed! *********');
      /* PS: YOU COULD ALSO CREATE CONTRACT DEPENDENCIES HERE */
      return deployer.deploy(Customer, {gas: 1000000}).then(function(){
        console.log('********* Customer is deployed! *********');
      });
    });
  };
  