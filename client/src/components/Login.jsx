import React, { useContext, useEffect } from 'react'
import { Web3Context } from '../Context/Web3Context'

export const Login = () => {

  const { connectWallet, walletInstalled, account } = useContext(Web3Context) 

  const connectToMetamask = async () => {
    const connected = await connectWallet()
    console.log(connected)

    // check for errors
    if(connected.error){
      alert(connected.error)
    }
  }

  return (
    <div className='bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-400 w-full min-h-[200pt] md:w-1/3 p-6 rounded-2xl text-slate-800 font-bold shadow-xl grid'>
        <button 
          className='bg-black shadow-md text-gray-100 m-auto hover:bg-blue-900 transition-all border-none cursor-pointer' 
          onClick={connectToMetamask}
          disabled={!walletInstalled || account}
        >
            { walletInstalled ? 
              (account ? `Connected: ${account.slice(0,6)}...${account.slice(-5)}` : "Connect Metamask") : 
              "Metamask Not Installed" }
        </button>
    </div>
  )
}
