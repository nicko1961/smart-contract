//https://eth-goerli.g.alchemy.com/v2/wDTqp_9TedpPbi3CLcIKreF3uEZcyYzM

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli :{
      url:'https://eth-goerli.g.alchemy.com/v2/j-OA_mYpnAbt_nTYOPVHxEtkAZR_lb4P',
      accounts: ['eea54ed6016e782be48864cdea1edd2ce5038f67d9163753cc731a8c14188bdc']
    }
  }
}