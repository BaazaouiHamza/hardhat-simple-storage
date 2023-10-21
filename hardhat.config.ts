import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"

const SEPOLIA_RPC_URL = process.env.SEPOLOIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY
  }
};

export default config;
