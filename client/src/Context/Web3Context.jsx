import { createContext, useEffect, useState } from 'react'

// destructuring of ethereum from windows object
const { ethereum } = window

export const Web3Context = createContext()

export const Web3Provider = ({ children }) => {

    // states initialized
    const [account, setAccount] = useState(localStorage.getItem('account') || '')
    const [walletInstalled, setWalletInstalled] = useState(true)
    const [activeChain, setActiveChain] = useState({})

    useEffect(() => {
        if(!ethereum) { 
            // alert("Metamask not installed")
            setWalletInstalled(false)
        }
        else{
            setWalletInstalled(true)
        }
    }, [])

    const detectChainChange = async () => {
        const chains = [
            {
                name: 'Sepolia',
                id: '0xaa36a7'
            },
            {
                name: 'Georli',
                id: '0x5'
            },
            {
                name: 'Linear Georli',
                id: '0xe704'
            }
        ]

        const currentChain = await ethereum.request({
            method: 'eth_chainId'
        })

        let chainData
        chains.map(chain => {
            if(chain.id === currentChain){
                chainData = chain
            }
        })

        if(!chainData){
            alert("Network Not allowed. Please switch to Geroli, Sepolia, or Linear Georli")
            
            return ({
                status: 400,
                message: 'Unsupported Network'
            })
        }
        else{
            setActiveChain(chainData)
            return ({
                status: 200
            })
        }
    }

    useEffect(() => {
        detectChainChange()
        ethereum.on('chainChanged', () => {
            detectChainChange()
        })
    }, [activeChain])
    
    const connectWallet = async () => {
        try{

            // walletInstalled || false
            
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
                params: []
            })

            setAccount(accounts[0])
            localStorage.setItem('account', accounts[0])
            
            return ({
                connected: true,
                account: accounts[0]
            })
        }
        catch(e){
            console.log(e)
            return ({
                connected: false,
                error: e.message
            })
        }
    }

    return (
        <Web3Context.Provider value={{
            connectWallet,
            account, walletInstalled
        }}>
            {children}
        </Web3Context.Provider>
    )
}

