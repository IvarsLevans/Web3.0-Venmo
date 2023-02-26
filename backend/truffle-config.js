require('dotenv').config();
const {MNEMONIC} = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/9776f217099040faac92ef80884f1ab3`),
    inf_Venmo_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\ivars\\OneDrive\\Desktop\\Projects\\venmo-clone\\.env', 'utf-8'), "https://goerli.infura.io/v3/9776f217099040faac92ef80884f1ab3")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.18"
    }
  }
};
