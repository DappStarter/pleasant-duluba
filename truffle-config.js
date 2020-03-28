require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain modify hockey prison obscure gift'; 
let testAccounts = [
"0xd6140fc044ca730ebc62fa3a6004f65203defee7092e6dd117e0f7c23e4fb841",
"0xd564d13fac6eca974be3f20e9f730b810e74bfae066d5b78d54a80474f1e7a11",
"0x61acfaf092c193cc3cb57526704f9a85e7821ce14030f0769bfdb2e0535a0289",
"0x31105914c0f304322e2b2a65ce7a3ec9f5d03433298ceca25b624b7eac56a361",
"0x753ae19cb179d25f3546d3d86a83d333cda7c876ce65b38d7a07b5a7a1d4744f",
"0x287eaf2c3b493c8e379e71690bef6f30bc94bf86d2ba227332791ce4dfd9e4e0",
"0xbe913f2091ddb37ff1516db99fe253d451bd1c46e0e8116429583ecea1630e5c",
"0x4ce9bf26164d68ed371c8fa5814fe0a2525192219d2a631991ebde1143185aa4",
"0x8bfbe0aad907bb1ecac9316d3565a408ea0e1cf9b86bdc5b5349b1e0295176f3",
"0x9de22536b25aa54ca78ed53d18a0d0b6a34f773ff9f5eacb7784ec13fe2b118d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
