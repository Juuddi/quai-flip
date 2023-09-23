export const npmSnapId = 'npm:@quainetwork/quai-snap'

// RPC URLs for provider construction
export const RPCURLs = {
	local: {
		'zone-0-0': 'http://localhost:8610',
		'zone-0-1': 'http://localhost:8542',
		'zone-0-2': 'http://localhost:8674',
		'zone-1-0': 'http://localhost:8512',
		'zone-1-1': 'http://localhost:8544',
		'zone-1-2': 'http://localhost:8576',
		'zone-2-0': 'http://localhost:8614',
		'zone-2-1': 'http://localhost:8646',
		'zone-2-2': 'http://localhost:8678',
	},
	remote: {
		'zone-0-0': 'https://rpc.cyprus1.colosseum.quaiscan.io',
		'zone-0-1': 'https://rpc.cyprus2.colosseum.quaiscan.io',
		'zone-0-2': 'https://rpc.cyprus3.colosseum.quaiscan.io',
		'zone-1-0': 'https://rpc.paxos1.colosseum.quaiscan.io',
		'zone-1-1': 'https://rpc.paxos2.colosseum.quaiscan.io',
		'zone-1-2': 'https://rpc.paxos3.colosseum.quaiscan.io',
		'zone-2-0': 'https://rpc.hydra1.colosseum.quaiscan.io',
		'zone-2-1': 'https://rpc.hydra2.colosseum.quaiscan.io',
		'zone-2-2': 'https://rpc.hydra3.colosseum.quaiscan.io',
	},
}

// Explorer URLs for transaction links
export const explorerURLs = {
	'Cyprus-1': 'https://cyprus1.colosseum.quaiscan.io',
	'Cyprus-2': 'https://cyprus2.colosseum.quaiscan.io',
	'Cyprus-3': 'https://cyprus3.colosseum.quaiscan.io',
	'Paxos-1': 'https://paxos1.colosseum.quaiscan.io',
	'Paxos-2': 'https://paxos2.colosseum.quaiscan.io',
	'Paxos-3': 'https://paxos3.colosseum.quaiscan.io',
	'Hydra-1': 'https://hydra1.colosseum.quaiscan.io',
	'Hydra-2': 'https://hydra2.colosseum.quaiscan.io',
	'Hydra-3': 'https://hydra3.colosseum.quaiscan.io',
}

// Shard names for Quai
export const sortedQuaiShardNames = {
	'zone-0-0': 'Cyprus-1',
	'zone-0-1': 'Cyprus-2',
	'zone-0-2': 'Cyprus-3',
	'zone-1-0': 'Paxos-1',
	'zone-1-1': 'Paxos-2',
	'zone-1-2': 'Paxos-3',
	'zone-2-0': 'Hydra-1',
	'zone-2-1': 'Hydra-2',
	'zone-2-2': 'Hydra-3',
}

// Contract addresses for flip contract
export const contractAddresses = {
	'zone-0-0': '0x0000000000000000000000000000000000000000',
	'zone-0-1': '0x0000000000000000000000000000000000000000',
	'zone-0-2': '0x0000000000000000000000000000000000000000',
	'zone-1-0': '0x0000000000000000000000000000000000000000',
	'zone-1-1': '0x0000000000000000000000000000000000000000',
	'zone-1-2': '0x0000000000000000000000000000000000000000',
	'zone-2-0': '0x0000000000000000000000000000000000000000',
	'zone-2-1': '0x0000000000000000000000000000000000000000',
	'zone-2-2': '0x0000000000000000000000000000000000000000',
}
