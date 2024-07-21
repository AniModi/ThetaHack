require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    theta: {
      accounts: ['1111111111111111111111111111111111111111111111111111111111111111'],
      url: 'http://localhost:18888/rpc',
      chainId: 366,
    }
  }
};
