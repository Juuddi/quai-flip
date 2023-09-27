// TODo:
// Fix key contract functions on Goerli (Play, deposit, data structure for getGameEntry, etc. and then redeploy and update info here)

export const contractABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: '_msg',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'player',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'winner',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'heads',
				type: 'bool',
			},
		],
		name: 'Status',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: '_playerChoice',
				type: 'bool',
			},
		],
		name: 'Play',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getContractBalance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'maxBet',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minBet',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'payPercentage',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_maxBet',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_minBet',
				type: 'uint256',
			},
			{
				internalType: 'uint32',
				name: '_payPercentage',
				type: 'uint32',
			},
		],
		name: 'setBetLimits',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalFlips',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
]
