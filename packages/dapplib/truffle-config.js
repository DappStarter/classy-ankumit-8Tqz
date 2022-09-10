require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name radar rifle huge hope entry army general'; 
let testAccounts = [
"0xcc4b22a3ea8db2f22b9494df305a31abeebc487c07e6973a2296b1f56298869f",
"0xb37ddab2a6570c468e5e92594569f58503e541cb0add8eec260dbc94039fd4f6",
"0x0bfa513c0755480af04bdd967771052cbd0488ca3ec129fd3e3e8704b846f44f",
"0x43197bc7e634cd7e049ba6e556bdcbafe1ebf35a877cd52f959bb031f2d2e93a",
"0x6d9f4c869e3467cfea0eff96635c6745faca49ea6405a22ba2810dc9c648dd5a",
"0xf9922b42d79d82a79e4cf40004376a1d712bd8e31a66e1f93c52c5e482ed39d6",
"0xb923d58e217132e077e22ebb97c9258d8f1550ad34bdf5c7cb83e4022cb732d1",
"0x47151afe909c425fda229bd870ec16b3584a8ea844055100befe6d837c0fdcbc",
"0x453628dbd95384435bad3d28190f06c0571aa019b3da13fe3970ad12aa19b940",
"0x00ab836c098338dd010eb39a9c75ff7a59eae835ec96507db162140ab139d7b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

