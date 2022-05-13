const Authenticity = artifacts. require("Authenticity");

module.exports = async function (deployer) {
    await deployer.deploy(Authenticity);
  };
   