'use strict'

const express = require('express')
const app = express()

const github = require('./github')

app.use('/', github)

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || '3000'

app.listen(port, host, (err) => {
  if (err) console.error(err)
  console.log(`[i] App is running on ${host}:${port}`)
})
