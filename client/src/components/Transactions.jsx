import React from 'react'

export const Transactions = () => {

    const account = localStorage.getItem('account') || ''

    const trxs = [
        {
            amount: '0.004 Eth',
            from: '0x5442b361dc122bCd29b05721f59B23FCa196d22C',
            to: '0x00122bCd29b05721f59B23FCa196d22C'
        },

        {
            amount: '0.004 Eth',
            from: '0x00122bCd29b05721f59B23FCa196d22C',
            to: '0x5442b361dc122bCd29b05721f59B23FCa196d22C'
        },

        {
            amount: '0.004 Eth',
            from: '0x00122bCd29b05721f59B23FCa196d22C',
            to: '0x5442b361dc122bCd29b05721f59B23FCa196d22C'
        },

        {
            amount: '0.004 Eth',
            from: '0x5442b361dc122bCd29b05721f59B23FCa196d22C',
            to: '0x00122bCd29b05721f59B23FCa196d22C'
        }
    ]
    
    return (
        <div>
            <h3 className='font-bold text-lg md:text-2xl'>
                My Last 5 Transactions
            </h3>

            <ul className='font-seminormal py-4 list-inside list-disc overflow-auto text-xs md:text-md'>
                {
                    trxs.map((trx, id) => <li key={id} className='py-3'>
                        {
                            trx.from.toLowerCase() == account ? (
                                `Sent ${trx.amount} to ${trx.to.slice(0,6)}...${trx.to.slice(-5)}`
                            ) : (
                                `Received ${trx.amount} from ${trx.from.slice(0,6)}...${trx.from.slice(-5)}`
                            )
                        }
                    </li>)
                }
            </ul>
        </div>
    )
}
