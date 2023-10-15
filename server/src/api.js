const express = require('express')
require('dotenv').config()

const Web3D = require('./services/web3d')

const api = new Web3D()

const port = process.env.PORT
const app = express()

app.get('/balance', (req, res) => {
    const { query } = req

    const address = query.account

    api.nativeTokenBalance(address)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})