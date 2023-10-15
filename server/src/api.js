const express = require('express')
require('dotenv').config()

const Web3D = require('./services/web3d')

const api = new Web3D()

const port = process.env.PORT
const app = express()

app.get('/balance', async (req, res) => {
    const { query } = req

    const address = query.account

    console.log(address)
    // res.send(address)

    const response = await api.nativeTokenBalance(address)

    res.json(response)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})