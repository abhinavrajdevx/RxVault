import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x425693afc590623c786c61aaF8548399E1CCD14C";
const ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "string", name: "description", type: "string" },
    ],
    name: "createLog",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
    ],
    name: "createTrial",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "parent_trial_record",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bool", name: "exists", type: "bool" },
      { internalType: "address", name: "author_address", type: "address" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "trials",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bool", name: "exists", type: "bool" },
      { internalType: "address", name: "author_address", type: "address" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const RPC_PROVIDER = "https://ethereum-sepolia-rpc.publicnode.com";

export const createTrial = async (private_key: string) => {
  const provider = new ethers.JsonRpcProvider(RPC_PROVIDER);
  const signer = new ethers.Wallet(private_key, provider);

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  console.log("contract created");
  const res = await contract.createTrial("title 1", "description 1");
  console.log(res);
  console.log("Tril created on blockchain");
};
