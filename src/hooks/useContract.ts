import { Dispatch, useContext, SetStateAction } from 'react'
import { quais } from 'quais'
import { ethers } from 'ethers'
import { GlobalDispatchContext, GlobalStateContext } from '../utils/store'
import { contractABI } from '../utils/contract'

function useContract() {
  const { rpcUrl, contractAddress, account, wsUrl } =
    useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  // set contract and provider
  const jsonprovider = new quais.providers.JsonRpcProvider(rpcUrl, 'any')
  // const wsprovider = new quais.providers.WebSocketProvider(wsUrl, 'any')
  const contract = new quais.Contract(
    contractAddress,
    contractABI,
    jsonprovider,
  )
  // const wscontract = new quais.Contract(
  //   contractAddress,
  //   contractABI,
  //   wsprovider,
  // )

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
    console.log('waiting forreceipt')
    try {
      const receipt = await jsonprovider.getTransactionReceipt(txhash)
      console.log(receipt)
    } catch (err: any) {
      console.log(err)
    }
    setTimeout(async () => {
      try {
        const receipt = await jsonprovider.waitForTransaction(txhash, 1, 10000)
        const decodedLogs = quais.utils.defaultAbiCoder.decode(
          ['string', 'address', 'uint', 'bool', 'bool', 'bool'],
          receipt.logs[0].data,
        )
        console.log('Decoded Logs', decodedLogs)
        setGameResult({
          message: decodedLogs[0],
          player: decodedLogs[1],
          prize: decodedLogs[2]._hex,
          heads: decodedLogs[3],
          winner: decodedLogs[4],
        })
        dispatch({
          type: 'SET_IS_FLIPPING',
          payload: { flipping: false, choice: false, bet: 0 },
        })
      } catch (err: any) {
        console.log(err)
      }
    }, 30000)
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
    const value = ethers.utils.parseEther(bet.toString())._hex
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
