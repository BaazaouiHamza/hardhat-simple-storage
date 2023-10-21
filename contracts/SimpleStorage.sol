// SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

// EVM , Ethereum Virtual Machine
// EvM Compatible: Avalanche, Fantom, Polygon

contract SimpleStorage {
    // boolean, uint, int, address, bytes
    uint256 public favoriteNumber; // this gets intialized to zero

    mapping(string => uint256) public nameToFavortieNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public favoriteNumberList;
    People[] public people;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
        // favoriteNumber = favoriteNumber + 1; the more stuff you do the more expensive the gas gets
        // calling view function is free unless youre calling it from a function that costs gas eg(this store func)
        // retrieve();
    }

    // view, pure
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // calldata, memory, stroage
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        // People memory newPerson = People({favoriteNumber:_favoriteNumber,name:_name});
        // same but you have to add parameters in the same order of the struct
        // People memory newPerson = People(_favoriteNumber,_name);
        // people.push(newPerson);
        // or just do in one line like this and without using memory keyword
        people.push(People(_favoriteNumber, _name));
        nameToFavortieNumber[_name] = _favoriteNumber;
    }
}
