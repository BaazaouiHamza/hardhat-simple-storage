import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
import "./tasks/block-number"

const SEPOLIA_RPC_URL = process.env.SEPOLOIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners()

//   for (const account of accounts) {
//     console.log(account.address)
//   }
// })


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost:{
      url:" http://127.0.0.1:8545/",
      chainId:31337,
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY
  }
};

export default config;
