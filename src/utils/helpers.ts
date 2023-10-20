import {
  sortedQuaiShardNames,
  RPCURLs,
  contractAddresses,
  explorerURLs,
} from './constants'

export const getPrettyNameFromShard = (shardName: string) => {
  return sortedQuaiShardNames[shardName as keyof typeof sortedQuaiShardNames]
}

export const getRPCURL = (shardName: string, environment: string) => {
  const env = RPCURLs[environment as keyof typeof RPCURLs]
  return env[shardName as keyof typeof env]
}

export const getContractAddressFromShard = (shardName: string) => {
  return contractAddresses[shardName as keyof typeof contractAddresses]
}

export const getExplorerURL = (shardName: string) => {
  return explorerURLs[shardName as keyof typeof explorerURLs]
}

export const detectWindow = () => {
  if (typeof window === 'undefined') {
    return
  }
  return window
}

export const reducetextShowFirst2Last2 = (text: string) =>
  `${text.slice(0, 2)}...${text.slice(-2)}`

export const reducetextShowSmallLength = (text: string) =>
  `${text.slice(0, 6)}...${text.slice(-4)}`

export const reducetextShowMediumLength = (text: string) =>
  `${text.slice(0, 10)}...${text.slice(-9)}`

export const reducetextShowMore = (text: string) =>
  `${text.slice(0, 14)}...${text.slice(-14)}`
