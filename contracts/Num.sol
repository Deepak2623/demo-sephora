// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Num {
    uint public a;

    function change_a(uint _a) external {
        a = _a;
    }
}
