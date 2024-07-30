// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Game {
    address public deployer = address(0);
    mapping(address => string) public players;
    mapping(address => string[]) public rewards;

    constructor() {
        deployer = msg.sender;
    }
    
    modifier authorized() {
        require(msg.sender == deployer, "Unauthorized");
        _;
    }

    function updateDungeon(
        address player,
        string memory dungeon
    ) external authorized() {
        players[player] = dungeon;
    }

    function updateReward(
        address player,
        string memory reward
    ) external authorized() {
        rewards[player].push(reward);
    }
}