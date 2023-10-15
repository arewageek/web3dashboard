import React, { useContext, useState } from 'react'

import { Web3Context } from '../context/Web3Context'
import { Balance } from './Balance'
import { Transactions } from './Transactions'
import { NFTs } from './NFTs'
import { Send } from './Send'

export const Dashboard = () => {

  const [currentTab, setCurrentTab] = useState('Balance')

  const {reload, account} = useContext(Web3Context)
  
  const tabs = [
    'Balance', 'Transactions', 'NFTs', 'Send Eth'
  ]
  
  return (
    <div className='md:w-2/3 p-6 w-full'>
      <div className='bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 p-3 rounded-t-2xl'>
        <div className='flex items-center font-bold px-5 space-x-5 overflow-x-auto text-sm'>

          {
            tabs.map((tab, id) => (
              <div 
                key={id}
                onClick={() => setCurrentTab(tab)}
                className={`${currentTab === tab ? 'text-white' : 'text-gray-300'} px-3 py-2 hover:text-white cursor-pointer transition-all`}
              >
                { tab }
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-400 w-full h-auto min-h-[300pt] rounded-b-2xl text-slate-800 font-bold shadow-xl p-4'>

        <h3 className='py-4 overflow-auto text-sm md:text-md'>
          { account && `Connected: ${account.slice(0,7)}...${account.slice(-7)}` }
        </h3>
        <div className='mb-6'>
          <button 
              className='bg-blue-400 shadow-lg hover:shadow border-none text-blue-950 transition-all text-sm'
              onClick={() => { 
                  localStorage.clear()
                  alert("Account Unlinked")
                  reload()
              }}    
          >
              Disconnet Wallet
          </button>
        </div>
        
        { currentTab === "Balance" && <Balance /> }
        { currentTab === "Transactions" && <Transactions /> }
        { currentTab === "NFTs" && <NFTs /> }
        { currentTab === "Send Eth" && <Send /> }
      </div>
    </div>
  )
} 
