const { Transaction } = require('@bsv/sdk');

/*
    Broadcast a transaction to the network
    - Get the transaction hex from the previous exercise
    - Broadcast it to the network
    - Find the transaction on WhatsOnChain by its ID
 */

(async () => {

  const transactionHex = `0100000001ad020191d54e29fcddd1ea5e1200fb48251b1258540a61e11fd054fea1769f28000000006a473044022013583585b7fb156df4c609d24832db8f2044e79d4a645c4a8480f984a48a3cda02201a4860a63b4fc8e08f0f2ffdcc3fc570ded8fee2689a4ce116c25b759369793041
2103ce0d61dc3d96bc48c4acf6c33669cd40ec95f295bb122c1af7611c590fbaadf1ffffffff0a02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab
236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02
000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac01000000000000001976a914f530d5656b4b114ecd630485ac7f03d1a526bac088ac00000000`;


  const tx = Transaction.fromHex(transactionHex);
  const result = await tx.broadcast();

  console.log('Broadcast result: ', result);
})();


