
const { ethers } = require("ethers");

const ADDRESS = "";
const ABI = "";
const ADDRESS_WALLET = ""; 
const TOKENS = ["", ""]; 

// Cung cấp RPC Provider
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const balances = await contract.getBalances(ADDRESS_WALLET, TOKENS);
  return balances;
};

test().then(console.log);
