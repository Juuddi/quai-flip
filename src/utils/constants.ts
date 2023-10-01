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
  'ws-local': {
    'zone-0-0': 'ws://localhost:8611',
    'zone-0-1': 'ws://localhost:8643',
    'zone-0-2': 'ws://localhost:8675',
    'zone-1-0': 'ws://localhost:8613',
    'zone-1-1': 'ws://localhost:8645',
    'zone-1-2': 'ws://localhost:8677',
    'zone-2-0': 'ws://localhost:8615',
    'zone-2-1': 'ws://localhost:8647',
    'zone-2-2': 'ws://localhost:8679',
  },
}

// Explorer URLs for transaction links
export const explorerURLs = {
  'zone-0-0': 'https://cyprus1.colosseum.quaiscan.io',
  'zone-0-1': 'https://cyprus2.colosseum.quaiscan.io',
  'zone-0-2': 'https://cyprus3.colosseum.quaiscan.io',
  'zone-1-0': 'https://paxos1.colosseum.quaiscan.io',
  'zone-1-1': 'https://paxos2.colosseum.quaiscan.io',
  'zone-1-2': 'https://paxos3.colosseum.quaiscan.io',
  'zone-2-0': 'https://hydra1.colosseum.quaiscan.io',
  'zone-2-1': 'https://hydra2.colosseum.quaiscan.io',
  'zone-2-2': 'https://hydra3.colosseum.quaiscan.io',
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
  'zone-0-0': '0x04a2a0B920466781a0057c8E84b01f413A9b267d',
  'zone-0-1': '0x0000000000000000000000000000000000000000',
  'zone-0-2': '0x0000000000000000000000000000000000000000',
  'zone-1-0': '0x0000000000000000000000000000000000000000',
  'zone-1-1': '0x0000000000000000000000000000000000000000',
  'zone-1-2': '0x0000000000000000000000000000000000000000',
  'zone-2-0': '0x0000000000000000000000000000000000000000',
  'zone-2-1': '0x0000000000000000000000000000000000000000',
  'zone-2-2': '0x0000000000000000000000000000000000000000',
}

export const themes = [
  { name: 'win95', color: '#c3c7cb' },
  { name: 'counterStrike', color: '#4b5844' },
  { name: 'bee', color: '#e5bd03' },
  { name: 'pamelaAnderson', color: '#ff0080' },
  { name: 'azureOrange', color: '#0180ff' },
  { name: 'olive', color: '#807f00' },
  { name: 'vaporTeal', color: '#246A73' },
  { name: 'matrix', color: '#535353' },
  { name: 'vermillion', color: '#cf4545' },
  { name: 'tooSexy', color: '#B80100' },
  { name: 'ninjaTurtles', color: '#00a800' },
  { name: 'tokyoDark', color: '#465051' },
  { name: 'molecule', color: '#c2c1c2' },
  { name: 'travel', color: '#908070' },
  { name: 'theSixtiesUSA', color: '#d067d7' },
  { name: 'candy', color: '#E5A4CB' },
  { name: 'modernDark', color: '#202127' },
  { name: 'storm', color: '#c6c6c6' },
  { name: 'millenium', color: '#d6cfc7' },
  { name: 'spruce', color: '#99c9a8' },
  { name: 'slate', color: '#97b9cb' },
  { name: 'rose', color: '#d6adb8' },
  { name: 'rainyDay', color: '#7a99b3' },
  { name: 'plum', color: '#ac978f' },
  { name: 'marine', color: '#75c1ba' },
  { name: 'maple', color: '#e5cc90' },
  { name: 'lilac', color: '#b1a7df' },
  { name: 'blackAndWhite', color: '#ffffff' },
  { name: 'highContrast', color: '#000000' },
  { name: 'eggplant', color: '#89b0a8' },
  { name: 'brick', color: '#c2bfa3' },
  { name: 'water', color: '#ced0cf' },
  { name: 'coldGray', color: '#a1a3ca' },
  { name: 'lilacRoseDark', color: '#b26496' },
  { name: 'violetDark', color: '#652a6d' },
]
