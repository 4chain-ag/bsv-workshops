const { PrivateKey } = require('@bsv/sdk');
/*
    Generate a random private key and
    - print it in WIF format
    - print its address
 */
const privKey = PrivateKey.fromRandom()
console.log("Random private key in WIF format:", privKey.toWif())
console.log("Address: ", privKey.toAddress())
const pubKey = privKey.toPublicKey()
console.log("Public key: ", pubKey.toString())

