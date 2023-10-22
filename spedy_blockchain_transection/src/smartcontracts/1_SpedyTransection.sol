// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleTransaction {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function sendEther(address payable _recipient, uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance");
        _recipient.transfer(_amount);
    }

    receive() external payable {}
}
