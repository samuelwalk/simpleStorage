pragma solidity ^0.4.17;

contract SimpleStorage {
    uint public storedData;

    function set(uint x) public {
        storedData = x;
    }
}
