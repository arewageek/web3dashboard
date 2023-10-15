const Moralis = require('moralis')
const { EvmChain } = require('@moralisweb3/common-evm-utils')

class Web3D {
    constructor (){
        async() => {
            Moralis.start({
                apiKey: process.env.MORALIS_APIKEY
            })
        }

        // console.log({API: process.env.MORALIS_ssssAPIKEY})
    }

    async nativeTokenBalance (account) {
        const chain = EvmChain.ETHEREUMS

        const response = await Moralis.default.EvmApi.balance.getNativeBalance({
            address: account,
            chain
        })

        // console.log(Moralis.default.EvmApi.balance.getNativeBalance)
        console.log(response)
        return response
    }
}

module.exports = Web3D