const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("Avatar", (m) => {

  const lock = m.contract("Avatar");

  return { lock };
});
