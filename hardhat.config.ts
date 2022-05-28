import "@nomiclabs/hardhat-waffle";
import { task } from "hardhat/config";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 31337
    }
  }
};
