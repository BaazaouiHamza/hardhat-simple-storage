import { ethers } from "hardhat"
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"
import { assert } from "chai"

describe("SimpleStorage", () => {
  let simpleStorageFactory: SimpleStorage__factory
  let simpleStorage: SimpleStorage
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()

  })

  it("Should start with a favorite number of 0", async () => {
    const favoriteNumber = await simpleStorage.retrieve()
    assert.equal(favoriteNumber.toString(), "0")
  })
  it("Shoul update when we call store", async () => {
    const txResponse = await simpleStorage.store("7")
    await txResponse.wait(1)

    const currentVal = await simpleStorage.retrieve()

    assert.equal(currentVal.toString(), "7")

  })

})