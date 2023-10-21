import { ethers, network, run } from "hardhat"

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.waitForDeployment()

  const simpleStorageAddress = await simpleStorage.getAddress()
  console.log(`Deployed Contract to :${simpleStorageAddress}`)
  // what happens when we deploy to our hardhat network (locally) ?

  if (network.config.chainId === 11155111 && process.env.ETHER_SCAN_API_KEY) {
    await simpleStorage.deploymentTransaction()?.wait(6)
    await verify(simpleStorageAddress)
  }

}

async function verify(contractAddress: string) {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
    })
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main().then(() => process.exit(0)).catch((error) => {
  console.log(error)
  process.exit(1)
})