import React, { useEffect } from 'react'
import axios from 'axios'

import { Web3Context } from '../context/Web3Context'

export const Balance = () => {

    const { account, reload } = React.useContext(Web3Context)

    const balances = [
        {
            amount: 0.0005,
            currency: 'eth'
        },
        {
            amount: 24,
            currency: 'avax'
        },
        {
            amount: 86,
            currency: 'matic'
        },
        {
            amount: 1046,
            currency: 'USDT'
        }
    ]

    useEffect(() => {
        // async () => {
            try{
                axios.get('http://localhost:3000/balance', {
                    params: {
                        account: account
                    }
                }).then(res => {
                    console.log(res)
                })
                // console.log(JSON.parse(response))
            }
            catch(e){
                console.log(e)
            }
        // }
    },[])

    return (
        <>
            <div className='w-full'>
                <h3 className='text-3xl pt-3 font-bold text-indigo-950'>
                    Available Tokens
                </h3>
                <div className='font-seminormal py-4 flex justify-between items-center flex-wrap'>
                    {
                        balances.map((token, id) => <div key={id} className='w-full md:w-1/3 p-3'> 
                            <div className='pr-3 md:pr-6 min-h-[50pt] rounded-2xl bg-blue-400 shadow-lg flex justify-between items-center'>
                                <div className='bg-blue-600 rounded-l-2xl flex justify-center items-center h-full min-h-[50pt] cursor-default w-1/3 text-blue-200 p-3'>
                                    {token.currency.toUpperCase()}
                                </div>
                                <div className='w-2/3 text-right text-xl md:text-2xl md:p-4'>
                                    {token.amount}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='mt-3'>
                <button className='px-3 py-2 md:px-5 md:py-3 text-sm rounded-xl border-none bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 hover:to-blue-900 hover:from-blue-900 transition-all text-purple-100'>
                    Refresh Balance
                </button>
            </div>
        </>
    )
}
