import React from 'react'

export const Send = () => {
  return (
    <div className='w-full'>
        <h3 className='text-xl md:text-2xl font-bold text-indigo-950 p-3'>
            Send Ethers
        </h3>
        <div className='w-full py-5'>
            <form className='w-full md:flex md:flex-wrap md:justify-between'>
                <div className='w-full md:w-1/2 p-3'>
                    <input type="text" className='w-full rounded-2xl bg-blue-300 p-2 shadow-lg placeholder:text-blue-600' placeholder="Receiver's Wallet"  />
                </div>

                <div className='w-full md:w-1/2 p-3'>
                    <input type="number" className='w-full rounded-2xl bg-blue-300 p-2 shadow-lg placeholder:text-blue-600' placeholder="Amount"  />
                </div>

                <div className='w-full p-3'>
                    <input type="submit" className='w-full md:w-auto px-9 py-3 rounded-lg bg-gradient-to-r from-violet-950 to-violet-900 hover:from-violet-900 hover:to-violet-950 transition-all text-purple-100 p-2 shadow-lg border-none cursor-pointer' placeholder="Amount"  />
                </div>
            </form>
        </div>
    </div>
  )
}
