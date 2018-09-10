var HousingRent = artifacts.require("./HousingRent.sol");

module.exports = function(deployer) {
  deployer.deploy(HousingRent);
};