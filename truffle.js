var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "Example Mnemonic"; //Mnemonic is risky to expose 
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/ExampleKey")
      },
      network_id: 3,
     gas: 4700000,
    //gasPrice: 10000000,
    },
    development: {
      /*host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id*/
      provider: function() {
      return new HDWalletProvider(mnemonic, "HTTP://127.0.0.1:7545/")
      },
      network_id: "*",
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
