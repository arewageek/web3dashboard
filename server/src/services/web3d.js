const Moralis = require('moralis').default
const { EvmChain } = require('@moralisweb3/common-evm-utils')

const {Web3} = require('web3')

class Web3D {
    
    constructor(){
        this.web3 = new Web3(process.env.INFURA_URL)
    }
    
    async nativeTokenBalance (account) {

        account = await this.web3.utils.toChecksumAddress(account)
        
        await Moralis.start({
            apiKey: process.env.MORALIS_APIKEY
        })
        
        const chains = [
            'SEPOLIA',
            'ETHEREUM',
            'GEORLI',
            'BSC',
            'MUMBAI',
            'POLYGON'
        ]

        let balances = []
        
        await Promise.all(
            chains.map(async (chainName) => {
                let chain = EvmChain[chainName]
    
                const balance = await Moralis.EvmApi.balance.getNativeBalance({
                    address: account,
                    chain
                })
                
                balances.push({
                    [chainName]: balance
                })
    
                // console.log(balances)
            })
        )
        // console.log(Moralis.default.EvmApi.balance.getNativeBalance)
        return balances
    }
    
}

module.exports = Web3D