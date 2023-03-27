const Utility_contract = artifacts.require("./Utility_contract.sol");

module.exports = function (deployer) {
  deployer.deploy(Utility_contract);
};
