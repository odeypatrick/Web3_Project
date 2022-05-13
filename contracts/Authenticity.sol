// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Authenticity {
  address public owner;
  string public info;
  constructor() public {
    owner = msg.sender;
  }

//Ensures that message sender is the owner
    modifier onlyOwner(){
        require(msg.sender==owner, "Only the owner can perform certain functions");
        _;
    }


//Allows ownership to be transferred
    function changeOwner(address newOwner) public onlyOwner(){
        owner = newOwner;
    }

    function inputInfo(string memory message) public onlyOwner{
        info = message;
    }
}

