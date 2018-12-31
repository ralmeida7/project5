// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("start silly wool split inner thought shaft often delay obscure south rose", "https://rinkeby.infura.io/v3/fa42c5242f384572a8773f15d4674ca9")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
}
