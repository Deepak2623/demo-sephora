// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const contractAddress = "0xf2FAB35E6F3594ba28D8C2f7A56166908d9A2ef7";

async function main() {
   // Retrieve the contract instance using its address
   const Contract = await hre.ethers.getContractAt("Num", contractAddress);

   // Call the "change_a" function of the contract
   const tx = await Contract.change_a(29);
 
   // Wait for the transaction to be mined
   await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
