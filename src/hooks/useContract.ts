import { Dispatch, useContext, SetStateAction } from 'react'
import { pollFor } from 'quais-polling'
import { quais } from 'quais'
import { GlobalDispatchContext, GlobalStateContext } from '../utils/store'
import { contractABI } from '../utils/contract'

function useContract() {
  const { rpcUrl, contractAddress, account } = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  // set contract and provider
  const jsonprovider = new quais.providers.JsonRpcProvider(rpcUrl, 'any')
  const contract = new quais.Contract(
    contractAddress,
    contractABI,
    jsonprovider,
  )

  // getBalance calls the contract's getContractBalance function and sets the contract balance in state
  const getBalance = async () => {
    let balance
    await contract
      .getContractBalance()
      .then((res: any) => {
        const wei = quais.BigNumber.from(res._hex)
        balance = quais.utils.formatEther(wei)
        dispatch({
          type: 'SET_CONTRACT_BALANCE',
          payload: balance,
        })
      })
      .catch((err: Error) => {
        console.error(err)
      })
    return balance
  }

  // getGameCount calls the contract's totalFlips function and sets the game count in state
  const getGameCount = async () => {
    let gameCount
    await contract
      .totalFlips()
      .then((res: any) => {
        gameCount = res.toNumber()
        dispatch({ type: 'SET_GAME_COUNT', payload: gameCount })
      })
      .catch((err: Error) => {
        console.error(err)
      })
    return gameCount
  }

  const getReceipt = async (
    txhash: string,
    setGameResult: Dispatch<SetStateAction<any>>,
  ) => {
    await pollFor(jsonprovider, 'getTransactionReceipt', [txhash], 1.5, 1)
      .then((receipt: any) => {
        console.log(receipt)
        if (receipt.logs[0]?.data === undefined) {
          dispatch({
            type: 'SET_IS_FLIPPING',
            payload: { flipping: false, choice: false, bet: 0 },
          })
          setGameResult({
            message: null,
            player: null,
            prize: null,
            winner: null,
            heads: null,
          })
          return
        }
        const decodedLogs = quais.utils.defaultAbiCoder.decode(
          ['string', 'uint', 'bool', 'bool'],
          receipt.logs[0].data,
        )
        const playerAddress = quais.utils.getAddress(
          receipt.logs[0].topics[0].slice(-40),
        )
        setGameResult({
          message: decodedLogs[0],
          player: playerAddress,
          prize: quais.utils.formatEther(decodedLogs[1]._hex),
          winner: decodedLogs[2],
          heads: decodedLogs[3],
        })
        dispatch({
          type: 'SET_IS_FLIPPING',
          payload: { flipping: false, choice: false, bet: 0 },
        })
      })
      .catch((err: Error) => {
        console.error(err)
        dispatch({
          type: 'SET_IS_FLIPPING',
          payload: { flipping: false, choice: false, bet: 0 },
        })
        setGameResult({
          message: null,
          player: null,
          prize: null,
          winner: null,
          heads: null,
        })
      })
  }

  // play calls the contract's Play function and sets the tx hash in state
  // takes in heads (boolean), bet (number), and setIsFlipStatusModalOpen (function)
  // handles opening of the FlipStatusModal
  const play = async (
    heads: boolean,
    bet: number,
    setIsFlipStatusModalOpen: any,
  ) => {
    console.log('Heads', heads)
    const value = quais.utils.parseEther(bet.toString())._hex
    const transactionData = await contract.populateTransaction.Play(heads, {
      value: value,
    })
    const tx = {
      from: account.addr,
      to: contractAddress,
      data: transactionData.data,
      value: value,
    }

    await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [tx],
      })
      .then((res: any, err: Error) => {
        if (typeof res === 'string') {
          dispatch({ type: 'SET_TX_HASH', payload: res })
          dispatch({
            type: 'SET_IS_FLIPPING',
            payload: { flipping: true, choice: heads, bet: bet },
          })
          setIsFlipStatusModalOpen(true)
        } else if (res.code === 4001) {
          console.log('Transaction Rejected')
        } else {
          console.log('Transaction Error:', err)
        }
      })
      .catch((err: Error) => {
        console.log('Transaction Error:', err)
      })
  }

  const fetchContractInfo = async () => {
    const balance = await getBalance()
    const gameCount = await getGameCount()
    return { balance, gameCount }
  }

  return {
    getGameCount,
    getBalance,
    play,
    getReceipt,
    fetchContractInfo,
  }
}

export default useContract
