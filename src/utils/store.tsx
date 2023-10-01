import React, { FC, ReactNode, createContext, useReducer } from 'react'

interface StateData {
  isModalOpen: boolean
  isTableLoading: boolean
  account: { addr: string; shard: string }
  isConnected: boolean
  window: any
  provider: any
  rpcUrl: string
  wsUrl: string
  signer: any
  contract: any
  contractAddress: string
  isLoggedIn: boolean
  contractBalance: number
  gameCount: number
  gameHistory: any
  isFlipping: { choice: boolean; flipping: boolean; bet: number }
  gameResult: {
    choice: boolean
    heads: boolean
    winner: boolean
    message: string
    prize: number
  }
  txHash: string
  isPelagus: boolean
}

const typeStateMap = {
  SET_IS_MODAL_OPEN: 'isModalOpen',
  SET_IS_TABLE_LOADING: 'isTableLoading',
  SET_ACCOUNT: 'account',
  SET_CONNECTED: 'isConnected',
  SET_WINDOW: 'window',
  SET_PROVIDER: 'provider',
  SET_RPC_URL: 'rpcUrl',
  SET_WS_URL: 'wsUrl',
  SET_SIGNER: 'signer',
  SET_CONTRACT: 'contract',
  SET_CONTRACT_ADDRESS: 'contractAddress',
  SET_IS_LOGGED_IN: 'isLoggedIn',
  SET_CONTRACT_BALANCE: 'contractBalance',
  SET_GAME_COUNT: 'gameCount',
  SET_GAME_HISTORY: 'gameHistory',
  SET_IS_FLIPPING: 'isFlipping',
  GAME_RESULT: 'gameResult',
  SET_TX_HASH: 'txHash',
  SET_IS_PELAGUS: 'isPelagus',
}

const initialState = {
  isModalOpen: false,
  isTableLoading: true,
  account: { addr: '', shard: '' },
  isConnected: false,
  window: null,
  provider: null,
  rpcUrl: '',
  wsUrl: '',
  signer: null,
  contract: null,
  contractAddress: '',
  isLoggedIn: false,
  contractBalance: 0,
  gameCount: 0,
  gameHistory: [],
  isFlipping: { choice: false, flipping: false, bet: 0 },
  gameResult: {
    choice: false,
    heads: false,
    winner: false,
    message: '',
    prize: 0,
  },
  txHash: '',
  isPelagus: false,
}

const reducer = (
  state: StateData,
  action: { type: keyof typeof typeStateMap; payload: any },
) => {
  const stateName = typeStateMap[action.type]
  if (!stateName) {
    console.warn(`Unkown action type: ${action.type}`)
    return state
  }
  return { ...state, [stateName]: action.payload }
}

const GlobalStateContext = createContext(initialState)
const GlobalDispatchContext = createContext<any>(null)

const StateProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export {
  typeStateMap,
  GlobalDispatchContext,
  GlobalStateContext,
  StateProvider,
}
