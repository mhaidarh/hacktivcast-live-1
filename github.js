const express = require('express')
const router = express.Router()

const axios = require('axios')

const params = {
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {'Authorization': `token ${process.env.GITHUB_TOKEN}`}
}

const request = axios.create(params)

// -----------------------------------------------------------------------------

router.get('/', (req, res) => {
  console.log('HELLO FROM GITHUB.JS')
})

module.exports = router
