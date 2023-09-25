// TODo:
// Fix key contract functions on Goerli (Play, deposit, data structure for getGameEntry, etc. and then redeploy and update info here)



export const contractABI = [
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
		name: 'getGameCount',
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
]
