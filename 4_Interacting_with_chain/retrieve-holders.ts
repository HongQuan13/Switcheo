import { ethers } from 'ethers';

// Instantiate provider with BSC network
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org"
);

// Instantiate $SWTH contract object
const swthTokenAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const swthTokenAbi = [
  "function balanceOf(address account) external view returns (uint256)",
];
const swthTokenContract = new ethers.Contract(
  swthTokenAddress,
  swthTokenAbi,
  provider
);

// Addresses to look up
const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// Retrieve balances for each address
const main = async () => {
  for (const address of addresses) {
    const balance = await swthTokenContract.balanceOf(address);
    const balanceFormatted = ethers.utils.formatUnits(balance);
    console.log(`${address} ${balanceFormatted}`);
  }
};

main();

